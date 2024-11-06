'use client';

import {F} from "polipo/react";

import InputComponent from './inputComonent';




export default function Home() {
  return (
    <>
      {/* <F layout="xl:Page2/Desktop2 2xl:Page1/Desktop"></F>
      <F layout="Page2/ClickMeSection/Frame1"></F>
      <F layout="Page1/Desktop">
      {{
        Group5: <F as="button" onClick={() => console.log(`hey`)}/>,
        Group2:null
      }}
      </F> */}
   
        {/* <F layout="Page1/HomepageV2 w-fill" state={{service1: true}}>
          {{
            ArticleSmall:<> 
            <F as="button" style={{zIndex:0}}></F> 
            <F>
              {{
                Image:<span style={{color:'red'}}>Hello</span>
              }}</F> </>,
            Application: <>
                <F as='div' style={{color:'black'}}>
                  {{
                    ApplicationForm:<>
                    
                        <div style={{width:'100%', height:'100%',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                          <F as='div' style={{border:'3px solid red',top:'0px',left:'0px'}}>
                            {{
                              SendRequest: <span>Dont touch me!</span>
                            }}
                          </F>
                          <F as='div' style={{border:'3px solid black'}}></F>
                          <F></F>
                        </div>
                        {console.log(process.env.NODE_ENV)}
                    </>
                  }}
                </F>
            </>}}             </F> */}

        <F layout="Page1/ButtonResting" as="button" style={{position:'absolute',left:'1000px'}}/>
        <F layout="Page1/InputResting">
          {{
            Box: <F>{{
              Content: <input type="text" style={{width:'100%'}}/>
            }}</F>
          }}
        </F>
        <F layout="Page1/CheckboxDisabled">
        {{
          BoundingBox: <input type="checkbox" name="" id="" />,
          Value: <F>
            <label htmlFor="coding">New Label</label>
          </F>
        }}
        </F>
        <F layout="sm:Page1/TableTime xl:Page1/TableTimeV2 w-fill">
        {{
          Table: <F>
            {{
              TableRow:<>
                <div style={{width:'100%',height:'100%', display:'flex', flexDirection:'column',justifyContent:'space-evenly',border:'1px solid yellow'}}>
                  <F></F>
                  <F as="div" style={{border:'1px solid red'}}>
                    {{
                      IdPole: <F>
                        {{
                          Text: <F>
                            <span>hes</span>
                          </F>
                        }}
                      </F>
                    }}
                  </F>
                  <F as="div" style={{border:'1px solid red'}}></F>
                  <F as="div" style={{border:'1px solid red'}}></F>
                </div>
              </>,
              Date: <F>
                <input type="text" style={{width:'100%'}}/>
              </F>,
              Date2: <F>
                <InputComponent/>
              </F>
            }}
          </F>
        }}</F>
        <F layout="Page1/EmptyLayout xl:Page1/TableTimeV2 w-fill"></F>
    </>
  );
}
