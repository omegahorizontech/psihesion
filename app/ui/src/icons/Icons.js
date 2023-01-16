import React from 'react';

// Material Icons
import Star from './IconComponents/Star';
import StarBorder from './IconComponents/StarBorder';
import SwapVert from './IconComponents/SwapVert';
import SwapVertCircle from './IconComponents/SwapVertCircle';
import TrendingFlat from './IconComponents/TrendingFlat';
import SubDirArrowRight from './IconComponents/SubDirArrowRight';
import ArrowBackAlt from './IconComponents/ArrowBackAlt';
import ArrowForwardAlt from './IconComponents/ArrowForwardAlt';
import AddCircle from './IconComponents/AddCircle';
import RemoveCircle from './IconComponents/RemoveCircle';
import Help from './IconComponents/Help';
import BaselineAssignment from './IconComponents/BaselineAssignment';
import PermIdentity from './IconComponents/PermIdentity';
import MonetizationOn from './IconComponents/MonetizationOn';
import Apartment from './IconComponents/Apartment';
import BeenHere from './IconComponents/BeenHere';
import Mood from './IconComponents/Mood';
import MoodBad from './IconComponents/MoodBad';
import Menu from './IconComponents/Menu';
import MenuOpen from './IconComponents/MenuOpen';
import FormatListNumberedRTL from './IconComponents/FormatListNumberedRTL';
import Description from './IconComponents/Description';
import Book from './IconComponents/Book';
import NaturePeople from './IconComponents/NaturePeople';
import RecentActors from './IconComponents/RecentActors';
import Receipt from './IconComponents/Receipt';
import FilterList from './IconComponents/FilterList';
import EmojiObjects from './IconComponents/EmojiObjects';
import ArrowLeft from './IconComponents/ArrowLeft';
import ArrowBack from './IconComponents/ArrowBack';
import ArrowForward from './IconComponents/ArrowForward';
import BioTech from './IconComponents/BioTech';

// Noun Project Icons
import LockSecure from './IconComponents/LockSecure';
import LoginDoor from './IconComponents/LoginDoor';
import LogoutDoor from './IconComponents/LogoutDoor';
import SignupCard from './IconComponents/SignupCard';
import LoadingPlanet from './IconComponents/LoadingPlanet';
import LoadingSimple from './IconComponents/LoadingSimple';

// Noun Project Icons
import HeartSuperHappy from './IconComponents/EmotionIconComponents/HeartSuperHappy';
import ManPractical from './IconComponents/EmotionIconComponents/ManPractical';
import WomanPractical from './IconComponents/EmotionIconComponents/WomanPractical';
import ManRepetitive from './IconComponents/EmotionIconComponents/ManRepetitive';
import WomanRepetitive from './IconComponents/EmotionIconComponents/WomanRepetitive';
import ManDistracted from './IconComponents/EmotionIconComponents/ManDistracted';
import WomanDistracted from './IconComponents/EmotionIconComponents/WomanDistracted';
import ManInhibited from './IconComponents/EmotionIconComponents/ManInhibited';
import WomanInhibited from './IconComponents/EmotionIconComponents/WomanInhibited';
import ManPride from './IconComponents/EmotionIconComponents/ManPride';
import WomanPride from './IconComponents/EmotionIconComponents/WomanPride';
import ManAnxious from './IconComponents/EmotionIconComponents/ManAnxious';
import WomanAnxious from './IconComponents/EmotionIconComponents/WomanAnxious';
import ManRestrained from './IconComponents/EmotionIconComponents/ManRestrained';
import WomanRestrained from './IconComponents/EmotionIconComponents/WomanRestrained';
import ManTense from './IconComponents/EmotionIconComponents/ManTense';
import WomanTense from './IconComponents/EmotionIconComponents/WomanTense';
import ManOpen from './IconComponents/EmotionIconComponents/ManOpen';
import WomanOpen from './IconComponents/EmotionIconComponents/WomanOpen';
import ManNuturing from './IconComponents/EmotionIconComponents/ManNuturing';
import WomanNuturing from './IconComponents/EmotionIconComponents/WomanNuturing';
import ManCompetitive from './IconComponents/EmotionIconComponents/ManCompetitive';
import WomanCompetitive from './IconComponents/EmotionIconComponents/WomanCompetitive';
import ManExpressive from './IconComponents/EmotionIconComponents/ManExpressive';
import WomanExpressive from './IconComponents/EmotionIconComponents/WomanExpressive';
import ManQuiet from './IconComponents/EmotionIconComponents/ManQuiet';
import WomanQuiet from './IconComponents/EmotionIconComponents/WomanQuiet';
import ManDecisive from './IconComponents/EmotionIconComponents/ManDecisive';
import WomanDecisive from './IconComponents/EmotionIconComponents/WomanDecisive';
import ManSociable from './IconComponents/EmotionIconComponents/ManSociable';
import WomanSociable from './IconComponents/EmotionIconComponents/WomanSociable';
import ManSpontaneous from './IconComponents/EmotionIconComponents/ManSpontaneous';
import WomanSpontaneous from './IconComponents/EmotionIconComponents/WomanSpontaneous';

// Noun Project Icons
import WizardBeard from './IconComponents/MythIconComponents/WizardBeard';
import EluMyth from './IconComponents/MythIconComponents/EluMyth';
import AuxMyth from './IconComponents/MythIconComponents/AuxMyth';
import PsiMyth from './IconComponents/MythIconComponents/PsiMyth';
import KubMyth from './IconComponents/MythIconComponents/KubMyth';
import BioMyth from './IconComponents/MythIconComponents/BioMyth';
import GenMyth from './IconComponents/MythIconComponents/GenMyth';

// Noun Project Icons
import Edges from './IconComponents/DiscoveryIconComponents/Edges';
import Field from './IconComponents/DiscoveryIconComponents/Field';
import Filter from './IconComponents/DiscoveryIconComponents/Filter';
import Nodes from './IconComponents/DiscoveryIconComponents/Nodes';
import Relationships from './IconComponents/DiscoveryIconComponents/Relationships';
import Search from './IconComponents/DiscoveryIconComponents/Search';

const Icon = props => {
  switch(props.name) {
    case "star":
      return <Star {...props} />;
    case "starBorder":
      return <StarBorder {...props} />;
    case "swapVert":
      return <SwapVert {...props} />;
    case "swapVertCircle":
      return <SwapVertCircle {...props} />;
    case "trendingFlat":
      return <TrendingFlat {...props} />;
    case "subDirArrowRight":
      return <SubDirArrowRight {...props} />;
    case "arrowBackAlt":
      return <ArrowBackAlt {...props} />;
    case "arrowForward":
      return <ArrowForward {...props} />;
    case "addCircle":
      return <AddCircle {...props} />;
    case "removeCircle":
      return <RemoveCircle {...props} />;
    case "help":
      return <Help {...props} />;
    case "baselineAssignment":
      return <BaselineAssignment {...props} />;
    case "permIdentity":
      return <PermIdentity {...props} />;
    case "monetizationOn":
      return <MonetizationOn {...props} />;
    case "apartment":
      return <Apartment {...props} />;
    case "beenHere":
      return <BeenHere {...props} />;
    case "mood":
      return <Mood {...props} />;
    case "moodBad":
      return <MoodBad {...props} />;
    case "menu":
      return <Menu {...props} />;
    case "menuOpen":
      return <MenuOpen {...props} />;
    case "formatListNumberedRTL":
      return <FormatListNumberedRTL {...props} />;
    case "description":
      return <Description {...props} />;
    case "book":
      return <Book {...props} />;
    case "naturePeople":
      return <NaturePeople {...props} />;
    case "recentActors":
      return <RecentActors {...props} />;
    case "receipt":
      return <Receipt {...props} />;
    case "filterList":
      return <FilterList {...props} />;
    case "emojiObjects":
      return <EmojiObjects {...props} />;
    case "arrowLeft":
      return <ArrowLeft {...props} />;
    case "arrowBack":
      return <ArrowBack {...props} />;
    case "arrowForward":
      return <ArrowForward {...props} />;
    case "bioTech":
      return <BioTech {...props} />;
    case "lockSecure":
      return <LockSecure {...props} />;
    case "loginDoor":
      return <LoginDoor {...props} />;
    case "logoutDoor":
      return <LogoutDoor {...props} />;
    case "signupCard":
      return <SignupCard {...props} />;
    case "loadingPlanet":
      return <LoadingPlanet {...props} />;
    case "loadingSimple":
      return <LoadingSimple {...props} />;
    default:
      return <div />;
  }
}


export const EmotionIcon = props => {
  switch(props.name) {
    case "heartSuperHappy":
      return <HeartSuperHappy {...props} />;
    case "manPractical":
      return <ManPractical {...props} />;
    case "womanPractical":
      return <WomanPractical {...props} />;
    case "manRepetitive":
      return <ManRepetitive {...props} />;
    case "womanRepetitive":
      return <WomanRepetitive {...props} />;
    case "manDistracted":
      return <ManDistracted {...props} />;
    case "womanDistracted":
      return <WomanDistracted {...props} />;
    case "manInhibited":
      return <ManInhibited {...props} />;
    case "womanInhibited":
      return <WomanInhibited {...props} />;
    case "manPride":
      return <ManPride {...props} />;
    case "womanPride":
      return <WomanPride {...props} />;
    case "manAnxious":
      return <ManAnxious {...props} />;
    case "womanAnxious":
      return <WomanAnxious {...props} />;
    case "manRestrained":
      return <ManRestrained {...props} />;
    case "womanRestrained":
      return <WomanRestrained {...props} />;
    case "manTense":
      return <ManTense {...props} />;
    case "womanTense":
      return <WomanTense {...props} />;
    case "manOpen":
      return <ManOpen {...props} />;
    case "womanOpen":
      return <WomanOpen {...props} />;
    case "manNuturing":
      return <ManNuturing {...props} />;
    case "womanNuturing":
      return <WomanNuturing {...props} />;
    case "manCompetitive":
      return <ManCompetitive {...props} />;
    case "womanCompetitive":
      return <WomanCompetitive {...props} />;
    case "manExpressive":
      return <ManExpressive {...props} />;
    case "womanExpressive":
      return <WomanExpressive {...props} />;
    case "manQuiet":
      return <ManQuiet {...props} />;
    case "womanQuiet":
      return <WomanQuiet {...props} />;
    case "manDecisive":
      return <ManDecisive {...props} />;
    case "womanDecisive":
      return <WomanDecisive {...props} />;
    case "manSociable":
      return <ManSociable {...props} />;
    case "womanSociable":
      return <WomanSociable {...props} />;
    case "manSpontaneous":
      return <ManSpontaneous {...props} />;
    case "womanSpontaneous":
      return <WomanSpontaneous {...props} />;
    default:
      return <div />;
  }
}


export const MythIcon = props => {
  switch(props.name) {
    case "wizardBeard":
      return <WizardBeard {...props} />;
    case "eluMyth":
      return <EluMyth {...props} />;
    case "auxMyth":
      return <AuxMyth {...props} />;
    case "psiMyth":
      return <PsiMyth {...props} />;
    case "kubMyth":
      return <KubMyth {...props} />;
    case "bioMyth":
      return <BioMyth {...props} />;
    case "genMyth":
      return <GenMyth {...props} />;
    default:
      return <div />;
  }
}



export const DiscoveryIcon = props => {
  switch(props.name) {
    case "edges":
      return <Edges {...props} />;
    case "field":
      return <Field {...props} />;
    case "filter":
      return <Filter {...props} />;
    case "nodes":
      return <Nodes {...props} />;
    case "relationships":
      return <Relationships {...props} />;
    case "search":
      return <Search {...props} />;
    default:
      return <div />;
  }
}

export default Icon;
