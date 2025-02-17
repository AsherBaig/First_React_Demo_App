import { useState  } from "react";
import { EXAMPLES } from "../data";
import TabButton from '../components/TabButton/TabButton.jsx';
import Tabs from './Tabs.jsx';
import Section from "./Section.jsx";


export default function Examples(){

    const [selectedTopic, setSelectedTopic]= useState();
 let tabContent="Please select a Topic.";

  if (selectedTopic){
    tabContent= ( 
    <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
   </div>
    );
  }

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
   // console.log(selectedTopic);
        }

    return (
        <Section title="Examples" id="examples">
        <Tabs  buttons={
          <>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
          </>}>
       {tabContent}
       </Tabs>
             <menu>
            
             </menu>


             {/* {!selectedTopic ? (
               <p> Please select a Topic..</p> 
             ) : ( 
             <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
             </div>
             )}  */}
             
      </ Section>

    );
}