import React from 'react';

import Datetime from './datetime';
import variable,{mm} from './exports'
import Sum,{Division} from './Calculator'
import Cards from './components/Cards';
import Data from './components/Data';
import Gamematch from './Gamematch';
import Hooks from './components/Hooks';
import Forms from './components/Forms';
import Todo from './components/Todo';
import Inc_Dec from './components/Inc_Dec';
import Accordion from './components/Accordion';
import ComponentA from './components/ContextAPI/ComponentA';
import APIcall from './components/APIcall';
import API2 from './components/api2';
console.log(Data)

const ww=[
    {name:"test1", age:22},
    {name:"test2", age:32},
    {name:"test3", age:42},
    {name:"test4", age:22},
];

console.log(ww.filter((vale)=>{
    return vale.age > 21
    }));

const res="yess";

const Result = ()=>{
    if(res=='yess'){
    return  <Cards name="static" details="ststic"/>
    }else{
        return <h3>No Result</h3>
    }
}


function Home(){
    return(
        <>
            <Datetime/>
            <h1>import/exports</h1>
            {variable()}
            {mm} 
            <h1>Calculator</h1>
            <p>Sum of two number is {Sum(2,3)}</p>
            <p>Division of two number is {Division(10,3)}</p>
            <h1>Crads</h1>

            {Data.map((val,index)=>{
                return(  <Cards key={index} name={val.name} details={val.details}/>)
            })}
            <h1>Tenrary</h1>
            {(res=="yess") ? <> <Result/> </>: <Result/>}
            <h1>If/else</h1>
            <Result/>
            <h1>Match Game</h1>
            <Gamematch/>
            <h1>Hooks</h1>
            <Hooks/>
            <h1>Forms</h1>
            <Forms/>
            <h1>Todo</h1>
           <Todo/>
            <h1>Incremnent & Decrement</h1>
            <Inc_Dec/>
            <h1>Accordion</h1>
            <Accordion/>
            <h1>Content API</h1>
            <ComponentA/>
            <h1>API call</h1>
            <APIcall/>
            <h1>Axios </h1>
            <API2/>
        </>
    )
}
export default Home;
