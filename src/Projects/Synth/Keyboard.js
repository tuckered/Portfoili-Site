import React from 'react'
import Tone from 'tone'
import Synth2 from './synth2'
import './keyboard.css'

export default class Keyboard extends React.Component {
  
  makeKeyboard = () => {
    const keyboard = {
      a: 'C',
      w: 'C#',
      s: 'D',
      e: 'D#',
      d: 'E',
      f: 'F',
      t: 'F#',
      g: 'G',
      y: 'G#',
      h: 'A',
      u: 'A#',
      j: 'B',
    }
    return <div>
      {Object.keys(keyboard).map(function(note) {
      // console.log(keyboard[note])
    })}
    <div className="note">{keyboard[this.note]}</div>
    </div>
  }


  render() {
    return <div className="keyboard-container">
      <div className="note-div" onClick={this.newSynth}>C</div>
      <div className="note-div">D</div>
      <div className="note-div">E</div>
      <div className="note-div">F</div>
      <div className="note-div">G</div>
      <div className="note-div">A</div>
      <div className="note-div">B</div>
      <div className="note-div">C</div>

      <this.makeKeyboard />
    </div>
  }
}
//   keyboardNotes = () => {

//   let octave = 4;

//   const keys = [];
//   let prevKey = 0;

//   const Instruments = {
//     // https://github.com/stuartmemo/qwerty-hancock
//     keyboard: {
//       // Lower octave.
//       a: 'Cl',
//       w: 'C#l',
//       s: 'Dl',
//       e: 'D#l',
//       d: 'El',
//       f: 'Fl',
//       t: 'F#l',
//       g: 'Gl',
//       y: 'G#l',
//       h: 'Al',
//       u: 'A#l',
//       j: 'Bl',
//       // Upper octave.
//       k: 'Cu',
//       o: 'C#u',
//       l: 'Du',
//       p: 'D#u',
//       ';': 'Eu',
//       "'": 'Fu',
//       ']': 'F#u',
//       '\\': 'Gu',
//     },
//   };
// }


//   let instrument = Instruments.keyboard;

//   const keyToNote = key => {
//     const note = instrument[ key ];
//     if ( !note ) {
//       return;
//     }

//     return Tone.Frequency(
//       note
//         .replace( 'l', octave )
//         .replace( 'u', octave + 1 )
//     ).toNote();
//   };

//   const onKeyDown = (() => {
//     let listener;

//     return synth => {
//       document.removeEventListener( 'keydown', listener );

//       listener = event => {
//         const { key } = event;

//         // Only trigger once per keydown event.
//         if ( !keys[ key ] ) {
//           keys[ key ] = true;

//           const note = keyToNote( key );
//           if ( note ) {
//             synth.triggerAttack( note );
//             prevKey = key;
//           }
//         }
//       };

//       document.addEventListener( 'keydown', listener );
//     };
//   })();

//   const onKeyUp = (() => {
//     let listener;
//     let prev;

//     return synth => {
//       // Clean-up.
//       if ( prev ) {
//         prev.triggerRelease();
//       }

//       document.removeEventListener( 'keyup', listener );

//       prev = synth;
//       listener = event => {
//         const { key } = event;
//         if ( keys[ key ] ) {
//           keys[ key ] = false;

//           const note = keyToNote( key );
//           if ( synth instanceof Tone.PolySynth ) {
//             synth.triggerRelease( note );
//           } else if ( note && key === prevKey ) {
//             // Trigger release if this is the previous note played.
//             synth.triggerRelease();
//           }
//         }
//       };

//       document.addEventListener( 'keyup', listener );
//     };
//   })();

//   // Octave controls.
//   document.addEventListener( 'keydown', event => {
//     // Decrease octave range (min: 0).
//     if ( event.key === 'z' ) { octave = Math.max( octave - 1, 0 ); }
//     // Increase octave range (max: 10).
//     if ( event.key === 'x' ) { octave = Math.min( octave + 1, 9 ); }
//   });

//   // Init.
//   (() => {
//     const synth = new Tone.PolySynth( 10 );
//     synth.toMaster();

//     onKeyDown( synth );
//     onKeyUp( synth );
//   })()
