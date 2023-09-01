import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import WordService from "../services/WordService"
import IWordService from '../types/Word';

const TutorialsList: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Array<IWordService>>([]);
  const [word, setText] = useState<string>("");
  const [language, setLanguage] = useState<string>("tr");


  const isLetter = (str: string) => {
    return str.match(/[a-z]/i);
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const word = e.target.value;
    setText(word);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.keyCode === 13){
      const word = (e.target as HTMLInputElement).value;
      setText(word);
      if(word != "" && word.length > 1 && isLetter(word)){
        WordService.search(word, language)
        .then((response: any) => {
          setSearchResults(response.data);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
      }
    }
  };


  const changeLanguage = () => {
    setSearchResults([]);
    let lan = language === "tr" ? "en": "tr"
    setLanguage(lan);
    if(word != "" && word.length > 1 && isLetter(word)){
      WordService.search(word, lan)
      .then((response: any) => {
        setSearchResults(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
    }
  };

  const getResult = () => {
    if(word != "" && word.length > 1 && isLetter(word)){
      WordService.search(word, language)
        .then((response: any) => {
          setSearchResults(response.data);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="container">
    <div className="text-center">
        <br></br>
        {/* <h1>TREN APP</h1> */}
    <div className="container-fluid text-left">
    <div className="row">
      <div className="col-md-12">
        <div className="input-group">
        
        <div className="input-group-append">
            <button
              className="btn btn-danger"
              type="button"
              onClick={changeLanguage}
            >
              {language === "tr" ? <>TR - EN</>: <>EN - TR</> } 
            </button>
          </div>


          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={word}
            onChange={onChangeText}
            onKeyDown={handleKeyDown}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={getResult}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className="col-md-12">
        {searchResults.length > 0 && 
        <table className="table table-bordered">
        <thead>
            {/* <tr>
            <th scope="col">Category</th>
            <th scope="col">Result</th> 

            </tr> */}
        </thead>

        {searchResults &&
            searchResults.map((result, index) => (
            <tbody key={index}>
                <tr>
                <td>{result.category}</td>
                {language === "en" ? <td>{result.turkish}</td> :  ""} 
                {language === "tr" ?  <td>{result.english}</td> :  ""} 
                </tr>
            </tbody>
            
            ))}
    </table>
        }
      </div>
     
    </div>
    </div>
    </div>
  </div>

  );
};

export default TutorialsList;
