import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import ThemeToggle from './components/fields/ThemeToggle'
import AssignedByPriorityField from './components/fields/AssignedByPriorityField'
import AssignedByStateField from './components/fields/AssignedByStateField'
import AssignedToYouField from './components/fields/AssignedToYouField'
import BlockquoteField from './components/fields/BlockquoteField'
import BoxField from './components/fields/BoxField'
import CodeBlockField from './components/fields/CodeBlockField'
import ButtonField from './components/fields/ButtonField'
import BreadcrumbField from './components/fields/BreadcrumbField'
import ButtonGroupField from './components/fields/ButtonGroupField'
import CaptionField from './components/fields/CaptionField'
import CardField from './components/fields/CardField'
import CheckboxField from './components/fields/CheckboxField'
import CircularProgressField from './components/fields/CircularProgressField'
import CollaboratorsField from './components/fields/CollaboratorsField'
import ContainerField from './components/fields/ContainerField'
import CreatedByYouField from './components/fields/CreatedByYouField'
import DatePickerField from './components/fields/DatePickerField'
import FormLabelField from './components/fields/FormLabelField'
import FormControlField from './components/fields/FormControlField'
import EmbedField from './components/fields/EmbedField'
import EmailField from './components/fields/EmailField'
import DividerField from './components/fields/DividerField'
import DialogField from './components/fields/DialogField'
import DateRangeField from './components/fields/DateRangeField'
import HeadingField from './components/fields/HeadingField'
import IssueActivitiesField from './components/fields/IssueActivitiesField'
import LinearProgressField from './components/fields/LinearProgressField'
import LinkField from './components/fields/LinkField'
import ListField from './components/fields/ListField'
import ListItemField from './components/fields/ListItemField'
import MapField from './components/fields/MapField'
import ModalField from './components/fields/ModalField'
import OrderedListField from './components/fields/OrderedListField'
import ParagraphField from './components/fields/ParagraphField'
import PasswordField from './components/fields/PasswordField'
import RadioGroupField from './components/fields/RadioGroupField'
import RadioTilesField from './components/fields/RadioTilesField'
import RecentProjectsField from './components/fields/RecentProjectsField'
import RepeaterField from './components/fields/RepeaterField'
import SelectField from './components/fields/SelectField'
import SlotField from './components/fields/SlotField'
import StackField from './components/fields/StackField'
import StatsBarField from './components/fields/StatsBarField'
import SwitchField from './components/fields/SwitchField'
import TableField from './components/fields/TableField'
import TestField from './components/fields/TestField'
import TextareaField from './components/fields/TextareaField'
import TextField from './components/fields/TextField'
import TimePickerField from './components/fields/TimePickerField'
import TimeRangeField from './components/fields/TimeRangeField'
import TooltipField from './components/fields/TooltipField'
import TypographyField from './components/fields/TypographyField'
import UnorderedListField from './components/fields/UnorderedListField'
import UploadField from './components/fields/UploadField'
import AlertField from './components/fields/Alertfield'
import AvatarField from './components/fields/AvatarField'
import BadgeField from './components/fields/BadgeField'
import SkeletonField from './components/fields/SkeletonField'
import TagField from './components/fields/TagField'
import PaginationField from './components/fields/PaginationField'
import AccordionField from './components/fields/AccordionField'
import TabsField from './components/fields/TabsField'
import ToastField from './components/fields/ToastField'
import SpinnerField from './components/fields/SpinnerField'
import NumberInputField from './components/fields/NumberInputField'
import SearchField from './components/fields/SearchField'
import MenuField from './components/fields/MenuField'
import StepperField from './components/fields/StepperField'
import RatingField from './components/fields/RatingField'
import NotificationField from './components/fields/NotificationField'
import PopoverField from './components/fields/PopoverField'
import ProgressBarField from './components/fields/ProgressBarField'
import AgeSelect from './components/fields/Ageselect'
import DefaultSelect from './components/fields/Defaultselect'
import Collapsable from './components/fields/Collapsable'
import CollapsableBig from './components/fields/Collapsablebig'
import AvatarGroup from './components/fields/Avatargroup'
import BreadcrumbsIcon from './components/fields/Breadcrumbsicon'
import ColorInput from './components/fields/Colorinput'
import ColorWithColorCode from './components/fields/Colorwithcolorcode'
import InputAnt from './components/fields/Inputant'
import Label from './components/fields/Label'
import MultiLabel from './components/fields/Multilabel'
import FabIcon from './components/fields/Fabicon'
import BigButton from './components/fields/BigButton'
import LoadingButton from './components/fields/LoadingButton'
import DragAndDropImageUpload from './components/fields/DragAndDropImageUpload'
import ImageUploadWithGridView from './components/fields/ImageUploadWithGridView'
import ImageUploadWithImageShow from './components/fields/ImageUploadWithImageShow'
import ImageUploadWithNameShow from './components/fields/ImageUploadWithNameShow'
import ImageUpload from './components/fields/ImageUpload'
import Details from './components/fields/Details'
import Month from './components/fields/Month'
import Quarter from './components/fields/Quarter'
import TimeWithEndTimeComponent from './components/fields/TimeWithEndTimeComponent'
import Year from './components/fields/Year'
import Week from './components/fields/Week'
import Card from './components/fields/Card'
import Progress from './components/fields/Progress'
import Horizontal from './components/fields/Horizontal'
import HorizontalMui from './components/fields/HorizontalMui'
import FabNumber from './components/fields/FabNumber'
import DarkIcon from './components/fields/DarkIcon'
import Icon from './components/fields/Icon'
import IconGroup from './components/fields/IconGroup'
import Home from './components/fields/Home'
import Settings from './components/fields/Settings'
import Slider from './components/fields/Slider'
import Carousal from './components/fields/Carousal'
import Bar from './components/fields/Bar'
import Line from './components/fields/Line'
import Pie from './components/fields/Pie'
import Sparklink from './components/fields/Sparklink'
import Chip from './components/fields/Chip'
import Counter from './components/fields/Counter'
import DataGrid from './components/fields/DataGrid'
import Image from './components/fields/Image'
import GridImage from './components/fields/GridImage'
import LargeImage from './components/fields/LargeImage'
import MediumImage from './components/fields/MediumImage'
import SmallImage from './components/fields/SmallImage'
import Player from './components/fields/Player'
import BackDrop from './components/fields/BackDrop'
import Appbar from './components/fields/Appbar'
import Masonry from './components/fields/Masonry'
import Paper from './components/fields/Paper'
import SpeedDial from './components/fields/SpeedDial'
import Drawer from './components/fields/Drawer'
import FileManager from './components/fields/FileManager'
import Header from './components/fields/Header'
import MegaMenu from './components/fields/MegaMenu'
import Navigation from './components/fields/Navigation'
import TreeView from './components/fields/TreeView'
import StepError from './components/fields/StepError'
import StepWithOutText from './components/fields/StepWithOutText'
import StepWithText from './components/fields/StepWithText'
import Basic from './components/fields/Basic'
import BottomIcon from './components/fields/BottomIcon'
import Centered from './components/fields/Centered'
import FullWidth from './components/fields/FullWidth'
import IconOnly from './components/fields/IconOnly'
import LeftIcon from './components/fields/LeftIcon'
import NewLine from './components/fields/NewLine'
import RightIcon from './components/fields/RightIcon'
import Small from './components/fields/Small'
import TopIcon from './components/fields/TopIcon'
import Vertical from './components/fields/Vertical'
import VerticalBar from './components/fields/VerticalBar'
import VerticalBottomIcon from './components/fields/VerticalBottomIcon'
import VerticalIconOnly from './components/fields/VerticalIconOnly'
import VerticalLeftIcon from './components/fields/VerticalLeftIcon'
import VerticalRightIcon from './components/fields/VerticalRightIcon'
import VerticalTopIcon from './components/fields/VerticalTopIcon'
import Grid from './components/fields/Grid'
import Kanban from './components/fields/Kanban'
import Gantt from './components/fields/Gantt'
import Calendar from './components/fields/Calendar'
import Leaflet from './components/fields/Leaflet'
import ThemeToggle from './components/fields/ThemeToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeToggle />
      <TextField />
      <EmailField />
      <PasswordField />
      <TextareaField />
      <CheckboxField />
      <RadioGroupField />
      <RadioTilesField />
      <SwitchField />
      <DatePickerField />
      <DateRangeField />
      <TimePickerField />
      <TimeRangeField />
      <UploadField />

      <ButtonField />
      <ButtonGroupField />
      <ListField />
      <ListItemField />
      <TooltipField />
      <TypographyField />
      <TableField />
      <CircularProgressField /> 
      {/* no  */}
      <LinearProgressField />

      <BoxField />
      <ContainerField />
      <DialogField />
      <StackField />

      <CardField />

      <BreadcrumbField />
      <LinkField />

      <FormControlField />
      <FormLabelField />

      <EmbedField />
      <SlotField />
      <TestField />

      <RepeaterField />




      <BlockquoteField />

      <CodeBlockField />



      <CaptionField />

      <StatsBarField />
      <AssignedToYouField />
      <AssignedByStateField />
      <AssignedByPriorityField />
      <IssueActivitiesField />
      <RecentProjectsField />
      <CollaboratorsField />





      <CodeBlockField />


      <CreatedByYouField />


      <DividerField />



      <HeadingField />






      <OrderedListField />
      <ParagraphField />




      <SelectField />








      <UnorderedListField />


      <MapField />


      <AlertField />


      <AvatarField />
      <BadgeField />
      <AlertField />
      <SkeletonField />
      <TagField />
      <PaginationField />
      <AccordionField />
      <TabsField />
      <ToastField />
      <SpinnerField />
      <NumberInputField />
      <SearchField />
      <MenuField />
      <StepperField />
      <RatingField />
      <NotificationField />
      <PopoverField />
      <ProgressBarField />

      <AgeSelect />
      <DefaultSelect />
      <Collapsable />
      <CollapsableBig />
      <AvatarGroup />
      <BreadcrumbsIcon />
      <ColorInput />
      <ColorWithColorCode />
      <InputAnt />
      <Label />
      <MultiLabel />
      <FabIcon />

      {/* Buttons */}
      <BigButton />
      <LoadingButton />
      {/* uploads */}
      <DragAndDropImageUpload />
      <ImageUploadWithGridView />
      <ImageUploadWithImageShow />
      <ImageUploadWithNameShow />
      <ImageUpload />

      {/* Picker */}
      <Details />
      <Month />
      <Quarter />
      <TimeWithEndTimeComponent />
      <Year />
      <Week />

      <Card />

      {/* progress */}
      <Progress />
      <Horizontal />
      <HorizontalMui />


      {/* fAB */}
      <FabNumber />

      {/* icons */}
      <DarkIcon />
      <Icon />
      <IconGroup />
      <Home />
      <Settings />

      <Slider />
      <Carousal />

      {/* chart */}

      <Bar />
      <Line />
      <Pie />
      <Sparklink />

      <Chip />
      <Counter />
      <DataGrid />
      
      {/* Image */}
      <Image />
      <GridImage />
      <LargeImage />
      <MediumImage />
      <SmallImage />


{/* map */}
<Leaflet />
<Player />
<BackDrop />
<Appbar />
<Masonry />
<Paper />
<SpeedDial />
<Drawer />
<FileManager />
<Header />
<MegaMenu />
<Navigation />
<TreeView />
<StepError />
<StepWithOutText />
<StepWithText />
<Basic />
<BottomIcon />
<Centered />
<FullWidth />
<IconOnly />
<LeftIcon />
<NewLine />
<RightIcon />
<Small />
<TopIcon />
<Vertical />
<VerticalBar />
<VerticalBottomIcon />
<VerticalIconOnly />
<VerticalLeftIcon />
<VerticalRightIcon />
<VerticalTopIcon />
<Grid />
<Kanban />
<Gantt />
<Calendar />



      


    </>
  )
}

export default App
