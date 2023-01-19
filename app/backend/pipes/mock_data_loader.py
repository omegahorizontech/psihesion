import os
import random

from helpers import readers, writers

dirname = os.path.dirname(__file__)
filename = os.path.join(dirname, '../../../Data/person.csv')


# IDEA: Create multiple 'loaders' to handle each csv

# 200(F)/200(M)
first_names = ["Jessica","Ashley","Emily","Sarah","Samantha","Amanda","Brittany","Elizabeth","Taylor","Megan","Hannah","Kayla","Lauren","Stephanie","Rachel","Jennifer","Nicole","Alexis","Victoria","Amber","Alyssa","Courtney","Rebecca","Danielle","Jasmine","Brianna","Katherine","Alexandra","Madison","Morgan","Melissa","Michelle","Kelsey","Chelsea","Anna","Kimberly","Tiffany","Olivia","Mary","Christina","Allison","Abigail","Sara","Shelby","Heather","Haley","Maria","Kaitlyn","Laura","Erin","Andrea","Natalie","Jordan","Brooke","Julia","Emma","Vanessa","Erica","Sydney","Kelly","Kristen","Katelyn","Marissa","Amy","Crystal","Paige","Cassandra","Gabrielle","Katie","Caitlin","Lindsey","Destiny","Kathryn","Jacqueline","Shannon","Jenna","Angela","Savannah","Mariah","Alexandria","Sierra","Alicia","Briana","Miranda","Jamie","Catherine","Brittney","Breanna","Grace","Monica","Sabrina","Madeline","Caroline","Molly","Erika","Mackenzie","Leah","Diana","Whitney","Cheyenne","Bailey","Christine","Meghan","Lindsay","Angelica","Cynthia","Margaret","Kaitlin","Alexa","Hailey","Veronica","Melanie","Bianca","Autumn","Ariel","Kristin","Bethany","Lisa","Kristina","Holly","Leslie","Casey","Chloe","April","Julie","Claire","Kaylee","Brenda","Kathleen","Karen","Rachael","Sophia","Patricia","Gabriela","Kendra","Dominique","Ana","Kara","Desiree","Tara","Michaela","Brandi","Carly","Kylie","Karina","Adriana","Valerie","Caitlyn","Natasha","Hayley","Rebekah","Jocelyn","Cassidy","Jade","Gabriella","Makayla","Daisy","Alison","Jillian","Faith","Audrey","Angel","Nancy","Dana","Krystal","Alejandra","Ariana","Summer","Isabella","Mikayla","Raven","Katrina","Kiara","Sandra","Meagan","Lydia","Kirsten","Chelsey","Zoe","Monique","Claudia","Mallory","Joanna","Deanna","Isabel","Ashlee","Felicia","Marisa","Mercedes","Mckenzie","Jasmin","Krista","Yesenia","Diamond","Evelyn","Selena","Cindy","Brandy","Gina","Mia","Michael","Christopher","Matthew","Joshua","Jacob","Nicholas","Andrew","Daniel","Tyler","Joseph","Brandon","David","James","Ryan","John","Zachary","Justin","William","Anthony","Robert","Jonathan","Austin","Alexander","Kyle","Kevin","Thomas","Cody","Jordan","Eric","Benjamin","Aaron","Christian","Samuel","Dylan","Steven","Brian","Jose","Timothy","Nathan","Adam","Richard","Patrick","Charles","Sean","Jason","Cameron","Jeremy","Mark","Stephen","Jesse","Juan","Alex","Travis","Jeffrey","Ethan","Caleb","Luis","Jared","Logan","Hunter","Trevor","Bryan","Evan","Paul","Taylor","Kenneth","Connor","Dustin","Noah","Carlos","Devin","Gabriel","Ian","Nathaniel","Gregory","Derek","Corey","Jesus","Scott","Bradley","Dakota","Antonio","Marcus","Blake","Garrett","Edward","Luke","Shawn","Peter","Seth","Mitchell","Adrian","Victor","Miguel","Shane","Chase","Isaac","Spencer","Lucas","Jack","Tanner","Angel","Vincent","Isaiah","Dalton","Brett","George","Alejandro","Elijah","Cory","Cole","Joel","Erik","Jake","Mason","Jorge","Dillon","Raymond","Colton","Ricardo","Casey","Francisco","Brendan","Devon","Keith","Colin","Wesley","Phillip","Oscar","Julian","Johnathan","Eduardo","Chad","Donald","Bryce","Ronald","Alec","Dominic","Grant","Martin","Henry","Mario","Xavier","Manuel","Alan","Derrick","Frank","Tristan","Collin","Omar","Jeremiah","Jackson","Troy","Edgar","Javier","Douglas","Clayton","Jonathon","Nicolas","Andre","Maxwell","Ivan","Philip","Levi","Sergio","Roberto","Darius","Andres","Cristian","Hector","Fernando","Drew","Curtis","Gary","Riley","Johnny","Max","Dennis","Malik","Wyatt","Cesar","Edwin","Gavin","Preston","Marco","Allen","Ruben","Calvin","Mathew","Randy","Brent","Jerry","Hayden","Alexis","Parker","Brady","Tony","Pedro","Craig","Larry"]
# 30
last_names = ["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor","Anderson","Thomas","Jackson","White","Harris","Martin","Thompson","Garcia","Martinez","Robinson","Clark","Rodriguez","Lewis","Lee","Walker","Hall","Allen","Young","Hernandez","King"]
# 20
common_roles = ["Manager","Nurse","Associate","Assistant","Sales","Engineer","Technician","Driver","Specialist","Travel","Registered Nurse","Representative","Customer Service","Nursing","Analyst","Director","Supervisor","Truck Driver","Sales Associate","Physician"]
# 200 "city, state"
city_states = ['New York City, New York', 'Los Angeles, California', 'Chicago, Illinois', 'Houston, Texas', 'Phoenix, Arizona', 'Philadelphia, Pennsylvania', 'San Antonio, Texas', 'San Diego, California', 'Dallas, Texas', 'San Jose, California', 'Austin, Texas', 'Jacksonville, Florida', 'Fort Worth, Texas', 'Columbus, Ohio', 'Charlotte, North Carolina', 'Indianapolis, Indiana', 'San Francisco, California', 'Seattle, Washington', 'Denver, Colorado', 'Nashville, Tennessee', 'Washington, District of Columbia', 'Oklahoma City, Oklahoma', 'Boston, Massachusetts', 'El Paso, Texas', 'Portland, Oregon', 'Las Vegas, Nevada', 'Memphis, Tennessee', 'Detroit, Michigan', 'Baltimore, Maryland', 'Milwaukee, Wisconsin', 'Albuquerque, New Mexico', 'Fresno, California', 'Tucson, Arizona', 'Sacramento, California', 'Mesa, Arizona', 'Kansas City, Missouri', 'Atlanta, Georgia', 'Omaha, Nebraska', 'Colorado Springs, Colorado', 'Raleigh, North Carolina', 'Long Beach, California', 'Virginia Beach, Virginia', 'Oakland, California', 'Miami, Florida', 'Minneapolis, Minnesota', 'Bakersfield, California', 'Tulsa, Oklahoma', 'Aurora, Colorado', 'Arlington, Texas', 'Wichita, Kansas', 'Tampa, Florida', 'New Orleans, Louisiana', 'Cleveland, Ohio', 'Honolulu, Hawaii', 'Anaheim, California', 'Irvine, California', 'Henderson, Nevada', 'Lexington, Kentucky', 'Stockton, California', 'Orlando, Florida', 'Louisville, Kentucky', 'Newark, New Jersey', 'Corpus Christi, Texas', 'St. Paul, Minnesota', 'Riverside, California', 'Cincinnati, Ohio', 'Greensboro, North Carolina', 'Santa Ana, California', 'Jersey City, New Jersey', 'San Juan, Puerto Rico', 'Pittsburgh, Pennsylvania', 'Lincoln, Nebraska', 'Durham, North Carolina', 'St. Louis, Missouri', 'Plano, Texas', 'Anchorage, Alaska', 'Chandler, Arizona', 'Gilbert, Arizona', 'Chula Vista, California', 'Buffalo, New York', 'Madison, Wisconsin', 'North Las Vegas, Nevada', 'Reno, Nevada', 'Irving, Texas', 'Fort Wayne, Indiana', 'Toledo, Ohio', 'Lubbock, Texas', 'St. Petersburg, Florida', 'Laredo, Texas', 'Chesapeake, Virginia', 'Enterprise, Nevada', 'Winston-Salem, North Carolina', 'Glendale, Arizona', 'Garland, Texas', 'Scottsdale, Arizona', 'Arlington, Virginia', 'Boise, Idaho', 'Santa Clarita, California', 'Norfolk, Virginia', 'Fremont, California', 'Spokane, Washington', 'Richmond, Virginia', 'Baton Rouge, Louisiana', 'Spring Valley, Nevada', 'San Bernardino, California', 'Tacoma, Washington', 'Frisco, Texas', 'Huntsville, Alabama', 'Modesto, California', 'Hialeah, Florida', 'Des Moines, Iowa', 'Port St. Lucie, Florida', 'Yonkers, New York', 'McKinney, Texas', 'Worcester, Massachusetts', 'Moreno Valley, California', 'Fontana, California', 'Columbus, Georgia', 'Rochester, New York', 'Fayetteville, North Carolina', 'Sunrise Manor, Nevada', 'Cape Coral, Florida', 'Little Rock, Arkansas', 'Overland Park, Kansas', 'Sioux Falls, South Dakota', 'Augusta, Georgia', 'Salt Lake City, Utah', 'Oxnard, California', 'Amarillo, Texas', 'Grand Prairie, Texas', 'Grand Rapids, Michigan', 'Peoria, Arizona', 'Huntington Beach, California', 'Tallahassee, Florida', 'Vancouver, Washington', 'Montgomery, Alabama', 'Glendale, California', 'Birmingham, Alabama', 'Providence, Rhode Island', 'Knoxville, Tennessee', 'Brownsville, Texas', 'Fort Lauderdale, Florida', 'Newport News, Virginia', 'Akron, Ohio', 'Cary, North Carolina', 'Tempe, Arizona', 'Chattanooga, Tennessee', 'Mobile, Alabama', 'Shreveport, Louisiana', 'Elk Grove, California', 'Eugene, Oregon', 'Salem, Oregon', 'Paradise, Nevada', 'Santa Rosa, California', 'Ontario, California', 'Lancaster, California', 'Fort Collins, Colorado', 'Rancho Cucamonga, California', 'Clarksville, Tennessee', 'Oceanside, California', 'Pembroke Pines, Florida', 'Aurora, Illinois', 'Palmdale, California', 'Garden Grove, California', 'Springfield, Missouri', 'Hayward, California', 'Salinas, California', 'Murfreesboro, Tennessee', 'Alexandria, Virginia', 'Paterson, New Jersey', 'Bellevue, Washington', 'Killeen, Texas', 'Sunnyvale, California', 'Lakewood, Colorado', 'Kansas City, Kansas', 'Charleston, South Carolina', 'Bayamon, Puerto Rico', 'Corona, California', 'Springfield, Massachusetts', 'Hollywood, Florida', 'Roseville, California', 'Mesquite, Texas', 'Escondido, California', 'Pasadena, Texas', 'Pomona, California', 'Naperville, Illinois', 'Joliet, Illinois', 'Savannah, Georgia', 'Surprise, Arizona', 'Bridgeport, Connecticut', 'Kent, Washington', 'Syracuse, New York', 'Thornton, Colorado', 'Denton, Texas', 'Jackson, Mississippi', 'Torrance, California', 'Rockford, Illinois', 'Visalia, California', 'Fullerton, California', 'Gainesville, Florida']
# 10
area_codes = ["310","212","305","702","202","415","404","312","949","713"]

def load_data():

    person_data = []
    header = readers.read_csv(filename)[0]

    person_data.append(header)

    for i in range(len(first_names)):
        first_name = first_names[i]
        last_name = random.choice(last_names)
        
        total_organizations = 100
        total_programs = 10
        total_projects = 100

        primary_organization = random.randint(1, total_organizations)
        primary_role = random.choice(common_roles)
        primary_location = random.choice(city_states)
        primary_program = random.randint(1, total_programs)
        primary_project = random.randint(1, total_projects)

        row = (
            i+1, # ID
            first_name, # First
            last_name, # Last
            primary_organization, # Primary Organization
            primary_role, # Primary Role
            primary_location, # Primary Location

            primary_program, # Primary Program
            primary_project, # Primary Project
            int(random.choice(area_codes) + str(random.randint(1000000, 9999999))), # Phone
            (first_name[0] + last_name).lower() + ".gmail.com", # Email
            (first_name + last_name).lower() + ".com", # Website

            random.sample(range(0, 101), 6), # Affinities
            random.sample(range(1, 101), random.randint(1, 50)), # Memes, sample amount from 1-50 from IDs 1-100
            random.sample(range(1, 101), random.randint(1, 50)), # Topics
            list(set([primary_organization] + random.sample(range(1, total_organizations + 1), random.randint(1, 10)))), # Organizations
            random.sample(range(1, len(first_names) + 1), random.randint(1, 100)), # Relationships
            random.sample(range(1, len(first_names) + 1), random.randint(1, 10)), # Similar Nodes

            # IDEA: Build a tree of related Programs/Projects, because this current approach is not consistent
            list(set([primary_program] + random.sample(range(1, total_programs + 1), random.randint(1, 10)))), # Programs
            list(set([primary_project] + random.sample(range(1, total_projects + 1), random.randint(1, 10)))), # Projects

            random.sample(range(0, 101), 3), # Psihesion Qualities
            list(set([primary_role] + random.sample(common_roles, random.randint(1, 3)))), # Roles
            
            # IDEA: Expand each to add more complexity (with other CSV files) to show intensity, etc.
            random.sample(range(1, 101), random.randint(1, 10)), # Beliefs
            random.sample(range(1, 101), random.randint(1, 10)), # Emotions
            random.sample(range(1, 101), random.randint(1, 10)), # Skills
            random.sample(range(1, 10001), random.randint(1, 100)), # Events
            list(set([primary_location] + random.sample(city_states, random.randint(1, 10)))), # Locations
            random.sample(range(1, 10001), random.randint(1, 100)), # Food
            random.sample(range(1, 11), random.randint(1, 2)), # Health_Care
            random.sample(range(1, 11), random.randint(1, 2)), # Education
            random.sample(range(1, 11), random.randint(1, 2)), # Vocation
            random.sample(range(1, 101), random.randint(1, 10)), # Services	
            random.sample(range(1, 101), random.randint(1, 4)), # Housing
            random.sample(range(1, 101), random.randint(1, 20)), # Entertainment
            random.sample(range(1, 101), random.randint(1, 10)), # Technology
        )
        person_data.append(row)

    writers.write_csv(filename, person_data) 
