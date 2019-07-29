import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { Link } from 'react-scroll'

export default class App extends React.Component{
  vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }

  vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Controller>
            <div className="name">Harrison Pearl</div>
            <a className='phone' href="tel:1-207-232-2882">207.232.2882</a>
            <a className='email' href="mailto:hspearl@gmail.com">hspearl@gmail.com</a>
            <Link
                className="more"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-300}
                duration= {1000}
                isDynamic={true}
            ></Link>
            <Scene
              triggerHook= '0.01'
              duration= '80%'
              offset="-160"
            >
                <Timeline>
                  <Timeline
                    position={1}
                    target={
                      <div className="ballWrapper">
                        <div className="ball"></div>
                      </div>
                    }
                  >
                    <Tween
                      from={{scale:0.2, color: 'black'}}
                      to={{scale:1,left: '75px', top:'168px'}}
                    />
                    <Tween
                      to={{left: '600px'}}
                    />
                  </Timeline>
                  <Timeline
                    position={2}
                    target={
                      <div className="info">Software Developer</div>
                    }
                  >
                    <Tween
                      from={{opacity: 0,}}
                      to={{opacity: 1,}}
                    />
                  </Timeline>
                </Timeline>
            </Scene>
            <div className="spacer"></div>
            <Scene
              triggerHook= {0.01}
              duration= '100'
              offset={-this.vh(95)}
            >
                <Timeline
                  position={1}
                  target={
                    <div id="section1" className="about">
                      <div className="aboutHeader">About Me</div>
                      <div className="aboutText">
                      I'm a fourth year studying computer science at Northwestern University.
                      I love working with emerging technologies, and finding new use cases
                      for interesting hardware. <br/><br/> My research is focused on developing VR, AR,
                      Web, and Voice-Based applications that extend user capabiliteis and productivity.

                      I'm always excited for a new opertunity to be creative, and to take a project from design to implmentation.
                      </div>
                    </div>
                  }
                >
                  <Tween
                    from={{marginLeft: '-10px'}}
                    to={{marginLeft: '-10px',}}
                  />
                  <Tween/>

                </Timeline>
            </Scene>
            <Scene
              triggerHook= {0.01}
              duration= '100'
              offset="-750"
            >
                <Timeline
                  position={1}
                  target={
                    <div className="about">
                      <div className="aboutHeader">More Stuff</div>
                      <div className="aboutText">
                      I'm a fourth year studying computer science at Northwestern University.
                      I love working with emerging technologies, and finding new use cases
                      for interesting hardware. <br/><br/> My research is focused on developing VR, AR,
                      Web, and Voice-Based applications that extend user capabiliteis and productivity.

                      I'm always excited for a new opertunity to be creative, and to take a project from design to implmentation.
                      </div>
                    </div>
                  }
                >
                  <Tween
                    from={{marginLeft: '-40px'}}
                    to={{marginLeft: '-10px',}}
                  />
                </Timeline>
            </Scene>
            <Scene

              triggerHook= {0.01}
              duration= '100'
              offset="-750"
            >
                <Timeline
                  position={1}
                  target={
                    <div className="about">
                      <div className="aboutHeader">Even More Stuff</div>
                      <div className="aboutText">
                      I'm a fourth year studying computer science at Northwestern University.
                      I love working with emerging technologies, and finding new use cases
                      for interesting hardware. <br/><br/> My research is focused on developing VR, AR,
                      Web, and Voice-Based applications that extend user capabiliteis and productivity.

                      I'm always excited for a new opertunity to be creative, and to take a project from design to implmentation.
                      </div>
                    </div>
                  }
                >
                  <Tween
                    from={{marginLeft: '-40px'}}
                    to={{marginLeft: '-10px',}}
                  />
                </Timeline>
            </Scene>
          </Controller>
        </header>
      </div>
    )
  }
}
