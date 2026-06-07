import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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


    </>
  )
}

export default App
