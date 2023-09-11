import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text, language}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);
  const [voices, setVoices] = useState(null);
  const [lang, setLang] = useState(language);

  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();

    setUtterance(u);
    setVoice(voices[0]);
    setVoices(voices);
    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlayTR = () => {

    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      utterance.voice = voices[0];
      utterance.pitch = pitch;
      utterance.rate = rate;
      utterance.volume = volume;
      synth.speak(utterance);
    }

    setIsPaused(false);
  };

  const handlePlayUK = () => {

    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      utterance.voice = voices[145];
      utterance.pitch = pitch;
      utterance.rate = rate;
      utterance.volume = volume;
      synth.speak(utterance);
    }

    setIsPaused(false);
  };

  const handlePlayUS = () => {

    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      utterance.voice = voices[144];
      utterance.pitch = pitch;
      utterance.rate = rate;
      utterance.volume = volume;
      synth.speak(utterance);
    }

    setIsPaused(false);
  };

  return (
    <div className="float-right">
      {lang === "en" ? 
          <button className="btn btn-info mr-1" onClick={handlePlayTR}>{isPaused ? <i class="bi bi-volume-down"></i> : <i className="bi bi-volume-up"></i>}</button>
          :  lang === "tr" ? 
    <>
      <button className=" btn btn-info mr-1" onClick={handlePlayUS}>{isPaused ? <i class="bi bi-volume-down"></i> : <i className="bi bi-volume-up"></i>} US </button>
      <button className="btn btn-info mr-1" onClick={handlePlayUK}>{isPaused ? <i class="bi bi-volume-down"></i> : <i className="bi bi-volume-up"></i>} UK </button>
    </>   : 
    <>
      <button className="btn btn-info mr-1" onClick={handlePlayTR}>{isPaused ? <i class="bi bi-volume-down"></i> : <i className="bi bi-volume-up"></i>} TR </button>
      <button className="btn btn-info mr-1" onClick={handlePlayUS}>{isPaused ? <i class="bi bi-volume-down"></i> : <i className="bi bi-volume-up"></i>} US </button>
      <button className="btn btn-info mr-1" onClick={handlePlayUK}>{isPaused ? <i class="bi bi-volume-down"></i> : <i className="bi bi-volume-up"></i>} UK </button>
    </>
      }
    </div>
  );
};

export default TextToSpeech;