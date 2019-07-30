import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { Link } from 'react-scroll'

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }

  vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 1000;
    // the rest is the same...

    if (isMobile) {
      return (
          <div className="App">
            <header className="App-header">
              <Controller>
                <a className="nameMobile" href="https://www.linkedin.com/in/harrisonpearl/">Harrison Pearl</a>
                <a className='phoneMobile' href="tel:1-207-232-2882">207.232.2882</a>
                <a className='emailMobile' href="mailto:hspearl@gmail.com">hspearl@gmail.com</a>
                <Link
                    className="moreMobile"
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration= {1000}
                    isDynamic={true}
                ></Link>
                <Scene

                  triggerHook= '0.01'
                  duration= '99%'
                  offset={-this.vh(48)}
                >
                    <Timeline>
                      <Timeline
                        position={1}
                        target={
                          <div className="ballWrapperMobile">
                            <div className="ballMobile"></div>
                          </div>
                        }
                      >
                        <Tween
                          from={{scale:0.08, color: 'black'}}
                          to={{scale:1,left: '280px', top:'100px'}}
                        />
                      </Timeline>
                      <Timeline
                        position={1}
                        target={
                          <div className="infoMobile">Software Developer</div>
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
                          <div className="containerHorizontal">
                            <div className="aboutTextMobile">
                            I'm a fourth year studying computer science at Northwestern University.
                            I love working with emerging technologies, and finding new use cases
                            for interesting hardware. <br/><br/> My research is focused on developing VR, AR,
                            Web, and Voice-Based applications that extend user capabiliteis and productivity.

                            I'm always excited for a new opertunity to be creative, and to take a project from design to implmentation.
                            </div>
                            <div className="face" />
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
                  offset={-this.vh(95)}
                >
                    <Timeline
                      position={1}
                      target={
                        <div className="about">
                          <div className="aboutHeader">Research</div>
                          <div className="containerHorizontal">
                            <div className="aboutTextMobile">
                            <br/><br/> I'm a fourth year studying computer science at Northwestern University.
                            I love working with emerging technologies, and finding new use cases
                            for interesting hardware. <br/><br/> My research is focused on developing VR, AR,
                            Web, and Voice-Based applications that extend user capabiliteis and productivity.

                            I'm always excited for a new opertunity to be creative, and to take a project from design to implmentation.
                            </div>
                            <img src="vr.png" className="vr"/>
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
                  offset={-this.vh(95)}
                >
                    <Timeline
                      position={1}
                      target={
                        <div className="about">
                          <div className="aboutHeader">Even More Stuff</div>
                          <div className="aboutTextMobile">
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
    } else {
      return (
          <div className="App">
            <header className="App-header">
              <Controller>
                <a className="name" href="https://www.linkedin.com/in/harrisonpearl/">Harrison Pearl</a>
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
                  duration= '99%'
                  offset={-this.vh(48)}
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
                          to={{scale:1,left: '600px', top:'168px'}}
                        />
                      </Timeline>
                      <Timeline
                        position={1}
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
                          <div className="containerHorizontal">
                            <div className="aboutText">
                            I'm a fourth year studying computer science at Northwestern University.
                            I love working with emerging technologies, and finding new use cases
                            for interesting hardware. <br/><br/> My research is focused on developing VR, AR,
                            Web, and Voice-Based applications that extend user capabiliteis and productivity.

                            I'm always excited for a new opertunity to be creative, and to take a project from design to implmentation.
                            </div>
                            <div className="face" />
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
                  offset={-this.vh(95)}
                >
                    <Timeline
                      position={1}
                      target={
                        <div className="about">
                          <div className="aboutHeader">Research</div>
                          <div className="containerHorizontal">
                            <div className="aboutText">
                            <br/><br/> I'm a fourth year studying computer science at Northwestern University.
                            I love working with emerging technologies, and finding new use cases
                            for interesting hardware. <br/><br/> My research is focused on developing VR, AR,
                            Web, and Voice-Based applications that extend user capabiliteis and productivity.

                            I'm always excited for a new opertunity to be creative, and to take a project from design to implmentation.
                            </div>
                            <img src="vr.png" className="vr"/>
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
                  offset={-this.vh(95)}
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


  // render(){
  //   if()
  //
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <Controller>
  //           <a className="name" href="https://www.linkedin.com/in/harrisonpearl/">Harrison Pearl</a>
  //           <a className='phone' href="tel:1-207-232-2882">207.232.2882</a>
  //           <a className='email' href="mailto:hspearl@gmail.com">hspearl@gmail.com</a>
  //           <Link
  //               className="more"
  //               activeClass="active"
  //               to="section1"
  //               spy={true}
  //               smooth={true}
  //               offset={-300}
  //               duration= {1000}
  //               isDynamic={true}
  //           ></Link>
  //           <Scene
  //
  //             triggerHook= '0.01'
  //             duration= '99%'
  //             offset={-this.vh(48)}
  //           >
  //               <Timeline>
  //                 <Timeline
  //                   position={1}
  //                   target={
  //                     <div className="ballWrapper">
  //                       <div className="ball"></div>
  //                     </div>
  //                   }
  //                 >
  //                   <Tween
  //                     from={{scale:0.2, color: 'black'}}
  //                     to={{scale:1,left: '600px', top:'168px'}}
  //                   />
  //                 </Timeline>
  //                 <Timeline
  //                   position={1}
  //                   target={
  //                     <div className="info">Software Developer</div>
  //                   }
  //                 >
  //                   <Tween
  //                     from={{opacity: 0,}}
  //                     to={{opacity: 1,}}
  //                   />
  //                 </Timeline>
  //               </Timeline>
  //           </Scene>
  //           <div className="spacer"></div>
  //           <Scene
  //             triggerHook= {0.01}
  //             duration= '100'
  //             offset={-this.vh(95)}
  //           >
  //               <Timeline
  //                 position={1}
  //                 target={
  //                   <div id="section1" className="about">
  //                     <div className="aboutHeader">About Me</div>
  //                     <div className="containerHorizontal">
  //                       <div className="aboutText">
  //                       I'm a fourth year studying computer science at Northwestern University.
  //                       I love working with emerging technologies, and finding new use cases
  //                       for interesting hardware. <br/><br/> My research is focused on developing VR, AR,
  //                       Web, and Voice-Based applications that extend user capabiliteis and productivity.
  //
  //                       I'm always excited for a new opertunity to be creative, and to take a project from design to implmentation.
  //                       </div>
  //                       <div className="face" />
  //                     </div>
  //                   </div>
  //                 }
  //               >
  //                 <Tween
  //                   from={{marginLeft: '-10px'}}
  //                   to={{marginLeft: '-10px',}}
  //                 />
  //                 <Tween/>
  //
  //               </Timeline>
  //           </Scene>
  //           <Scene
  //             triggerHook= {0.01}
  //             duration= '100'
  //             offset={-this.vh(95)}
  //           >
  //               <Timeline
  //                 position={1}
  //                 target={
  //                   <div className="about">
  //                     <div className="aboutHeader">Research</div>
  //                     <div className="containerHorizontal">
  //                       <div className="aboutText">
  //                       <br/><br/> I'm a fourth year studying computer science at Northwestern University.
  //                       I love working with emerging technologies, and finding new use cases
  //                       for interesting hardware. <br/><br/> My research is focused on developing VR, AR,
  //                       Web, and Voice-Based applications that extend user capabiliteis and productivity.
  //
  //                       I'm always excited for a new opertunity to be creative, and to take a project from design to implmentation.
  //                       </div>
  //                       <img src="vr.png" className="vr"/>
  //                     </div>
  //                   </div>
  //                 }
  //               >
  //                 <Tween
  //                   from={{marginLeft: '-40px'}}
  //                   to={{marginLeft: '-10px',}}
  //                 />
  //               </Timeline>
  //           </Scene>
  //           <Scene
  //
  //             triggerHook= {0.01}
  //             duration= '100'
  //             offset={-this.vh(95)}
  //           >
  //               <Timeline
  //                 position={1}
  //                 target={
  //                   <div className="about">
  //                     <div className="aboutHeader">Even More Stuff</div>
  //                     <div className="aboutText">
  //                     I'm a fourth year studying computer science at Northwestern University.
  //                     I love working with emerging technologies, and finding new use cases
  //                     for interesting hardware. <br/><br/> My research is focused on developing VR, AR,
  //                     Web, and Voice-Based applications that extend user capabiliteis and productivity.
  //
  //                     I'm always excited for a new opertunity to be creative, and to take a project from design to implmentation.
  //                     </div>
  //                   </div>
  //                 }
  //               >
  //                 <Tween
  //                   from={{marginLeft: '-40px'}}
  //                   to={{marginLeft: '-10px',}}
  //                 />
  //               </Timeline>
  //           </Scene>
  //         </Controller>
  //       </header>
  //     </div>
  //   )
  // }
}
