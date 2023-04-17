import pandas as pd
import json

def parsed_json_from_csv(filename, engine):
    """Takes a CSV ledger and groups transactions by their description, providing group summaries for display in JSON
    
    param filename: str: The filename of the ledger to parse
    param engine: str: The parsing engine to use for reading the ledger file
    returns: List of dictionaries, with each dictionary representing a group of transactions 
    rtype: JSON"""
    transactions = pd.read_excel(filename, engine=engine)
    groups = transactions.groupby(["TRANSACTION DESCRIPTION"])
    group_info = pd.DataFrame()
    sums = groups.sum()
    group_info["COUNTS"] = groups.count()["POSTING DATE"]
    group_info["DEPOSITS"] = sums["DEPOSITS & OTHER CREDITS (+)"]
    group_info["DEBITS"] = sums["WITHDRAWALS & OTHER DEBITS (-)"]
    group_info = group_info.assign(GROUP_ID=pd.RangeIndex(len(group_info.index)))
    parsed_trxns = [{
    "name": k,
    "summary": group_info.loc[k].to_json(),
    "transactions": transactions.iloc[v].to_json(orient='records'),
    "tags": []
    } for k, v in groups.groups.items()]
    
    return json.dumps(parsed_trxns)

# If you want to see how the result of the above looks, uncomment these 2 lines:
# parsed_json = parsed_json_from_csv("OmegaHorizon-checking-2022Transactions.ods", "odf")
# print(parsed_json)