import React from 'react';
import { questions } from '../data';
import Questions from './Questions';

const Project4 = () => {
  return (
   <main>
    <header>Question's and Answer's</header>
    <section>
     <div className='questionContainer'>
      {questions.length && questions.map(singleQuestions => 
       <Questions key={singleQuestions.id} {...singleQuestions}/>
      )}
     </div>
    </section>
   </main>
  )
}

export default Project4