import React, { Component }   from 'react';
import navigationModel        from '../../models/navigation.model.json';
import contactModel           from '../../models/contact.model.json';
import bottomModel            from '../../models/sections/bottom';
import {
  NavigationBar,
  HomeHeaderSection,
  SectionSeparator,
  Features,
  YoutubePreview,
  Bottom,
  Summary
}                             from '../../components';
import cx                     from 'classnames';
import {
  featuresModel,
  WAY_POINT_FEATURE_1,
  WAY_POINT_FEATURE_2,
  WAY_POINT_FEATURE_3
}                             from '../../models/sections/features';
import imagesModel            from '../../models/app.images.model.json';
import { ViewContainer }      from '../../containers';
import Waypoint               from 'react-waypoint';
import Scroll                 from 'react-scroll';

const Element = Scroll.Element;
const Events  = Scroll.Events;

const version = 'v0.1.2';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navModel:              navigationModel,
      featuresModel:         featuresModel,
      bottomModel:           bottomModel,
      navigationBarLighter:  false,
      twitterLink:           contactModel.twitterLink,
      images:                imagesModel,
      animated:              true,
      [WAY_POINT_FEATURE_1]: false,
      [WAY_POINT_FEATURE_2]: false,
      [WAY_POINT_FEATURE_3]: false,
      showYoutube:           false
    };
  }

  componentDidMount() {
    console.log(`hello! welcome to PermisPts ${version}`);
    Events.scrollEvent.register('begin', ()=>this.handleScrollBegin());
    Events.scrollEvent.register('end', ()=>this.handleScrollEnd());
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    const navigationClasses = cx({
      'navbar':           true,
      'navbar-default':   true,
      'navbar-fixed-top': false,
      'navbar-lighter':   false
    });
    const homeHeaderSectionTitle    = 'PermisPts';
    return(
      <div
        id="homeView"
        key="homeView">
        <NavigationBar
          brand={this.state.navModel.brand}
          navModel={this.state.navModel}
          cssClass={navigationClasses}
        />
        <ViewContainer
          isAnimated={true}>
          <Element
            name="scrollToHOME"
            className="element">
            <HomeHeaderSection
              title={homeHeaderSectionTitle}
              subtitle={
                <span>
                  <span style={{color: '#2574A9'}}>
                    NOUVEAU
                  </span>
                  {' PermisPts '}
                  <span style={{color: '#2574A9'}}>
                    GRATUIT
                  </span>
                  {' depuis la version 2.0'}
                </span>
              }
              storesImages={this.state.images.stores}
              carousel={this.state.images.carousel}
            />
          </Element>
          {
            this.state.featuresModel.map(
              (feature, index) => {
                return (
                  <div key={index}>
                    <SectionSeparator />
                    <Element
                      name={feature.scrollToKey}
                      className="element">
                      <Features
                        textIos={feature.textIos}
                        waypointKey={feature.waypointKey}
                        onWaypointEnter={(wpKey) => this.handleWaypointEnter(wpKey)}
                        onWaypointLeave={(wpKey) => this.handleWaypointLeave(wpKey)}
                        triggersAnimation={this.state[feature.waypointKey]}
                        imgSrcIos={feature.imgSrcIos}
                        textAndroid={feature.textAndroid}
                        imgSrcAndroid={feature.imgSrcAndroid}
                      />
                    </Element>
                  </div>
                );
              }
            )
          }
          <SectionSeparator />
          <Waypoint
            key={'WpIosYoutube'}
            onEnter={() => this.handleWaypointEnter('WpIosYoutube')}
            onLeave={() => this.handleWaypointEnter('WpIosYoutube')}
            threshold={0.2}
          />
          <Element
            name="scrollToYoutubePreview"
            className="element">
            <YoutubePreview
              showYoutube={this.state.showYoutube}
              videoTitle={'PermisPts : aperçu vidéo sur iOS'}
              videoEmbedLink={'https://www.youtube.com/embed/0HCIM_PmMWk?rel=0'}
            />
          </Element>
          <SectionSeparator />
          <SectionSeparator />
          <Waypoint
            key={'WpSummary'}
            onEnter={() => this.handleWaypointEnter('WpSummary')}
            onLeave={() => this.handleWaypointEnter('WpSummary')}
            threshold={0.2}
          />
          <Element
            name="scrollToSummary"
            className="element">
            <Summary
              mainTitle={'Pour consulter le solde de vos points vous avez désormais le choix entre :'}
              appTitle={'Une application mobile sécurisée :'}
              teleServiceTitle={'Le téléservice officiel :'}
              storesImages={this.state.images.stores}
            />
          </Element>
          <SectionSeparator />
          <Waypoint
            key={'WpFooter'}
            onEnter={() => this.handleWaypointEnter('WpFooter')}
            onLeave={() => this.handleWaypointEnter('WpFooter')}
            threshold={0.2}
          />
          <Element
            name="scrollToBottom"
            className="element">
            <Bottom
              copyrights={this.state.bottomModel.copyrights}
              socials={this.state.bottomModel.socials}
            />
          </Element>

        </ViewContainer>
      </div>
    );
  }

  handleScrollBegin() {
    // console.log('scroll begins: ', arguments);
  }

  handleScrollEnd() {
    // console.log('scroll ends: ', arguments);
  }

  handleWaypointEnter(here) {
    switch (here) {
    case WAY_POINT_FEATURE_1:
      this.setState({
        [WAY_POINT_FEATURE_1]: true  || this.state[WAY_POINT_FEATURE_1],
        [WAY_POINT_FEATURE_2]: false || this.state[WAY_POINT_FEATURE_2],
        [WAY_POINT_FEATURE_3]: false || this.state[WAY_POINT_FEATURE_3]
      });
      break;
    case WAY_POINT_FEATURE_2:
      this.setState({
        [WAY_POINT_FEATURE_1]: true  || this.state[WAY_POINT_FEATURE_1],
        [WAY_POINT_FEATURE_2]: true  || this.state[WAY_POINT_FEATURE_2],
        [WAY_POINT_FEATURE_3]: false || this.state[WAY_POINT_FEATURE_3]
      });
      break;
    case WAY_POINT_FEATURE_3:
      this.setState({
        [WAY_POINT_FEATURE_1]: true  || this.state[WAY_POINT_FEATURE_1],
        [WAY_POINT_FEATURE_2]: true  || this.state[WAY_POINT_FEATURE_2],
        [WAY_POINT_FEATURE_3]: true  || this.state[WAY_POINT_FEATURE_3]
      });
      break;
    case 'WpIosYoutube':
      this.setState({
        showYoutube: true,
        [WAY_POINT_FEATURE_1]: true  || this.state[WAY_POINT_FEATURE_1],
        [WAY_POINT_FEATURE_2]: true  || this.state[WAY_POINT_FEATURE_2],
        [WAY_POINT_FEATURE_3]: true  || this.state[WAY_POINT_FEATURE_3]
      });
      break;
    case 'WpSummary':
      this.setState({
        showYoutube: true,
        [WAY_POINT_FEATURE_1]: true  || this.state[WAY_POINT_FEATURE_1],
        [WAY_POINT_FEATURE_2]: true  || this.state[WAY_POINT_FEATURE_2],
        [WAY_POINT_FEATURE_3]: true  || this.state[WAY_POINT_FEATURE_3]
      });
      break;
    case 'WpFooter':
      this.setState({
        showYoutube: true,
        [WAY_POINT_FEATURE_1]: true  || this.state[WAY_POINT_FEATURE_1],
        [WAY_POINT_FEATURE_2]: true  || this.state[WAY_POINT_FEATURE_2],
        [WAY_POINT_FEATURE_3]: true  || this.state[WAY_POINT_FEATURE_3]
      });
      break;
    default:
      this.setState({
        [WAY_POINT_FEATURE_1]: this.state[WAY_POINT_FEATURE_1],
        [WAY_POINT_FEATURE_2]: this.state[WAY_POINT_FEATURE_2],
        [WAY_POINT_FEATURE_3]: this.state[WAY_POINT_FEATURE_3]
      });
      break;
    }
  }

  handleWaypointLeave(here) {
    // console.info('waypoint leave: ', here);
  }

}

export default Home;
