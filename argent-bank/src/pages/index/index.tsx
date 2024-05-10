import TextCard from '../../components/molecules/textcard';
import Card from '../../components/molecules/card';
import Flex from '../../components/layouts/flex';
import Hero from '../../components/layouts/hero';

import "./index.css"
import AppHeader from '../../components/organisms/header';
import AppFooter from '../../components/organisms/footer';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Layout({ hero, content }) {
  return (
    <Flex>
      <Hero
        imgURL='/assets/bank-tree.jpeg'
        imgAlt='Bank tree'
      >
        {hero}
      </Hero>
      <div className="content">
        {content}
      </div>
    </Flex>
  )
}

function Page() {

  const heroData = {
    title: "Promoted Content",
    subtitles: ["No fees.", "No minimum deposit.", "High interest rates."],
    content: "Open a savings account with Argent Bank today!"
  }
  const navigate = useNavigate()
  const logged = useSelector((state:RootState) => state.auth.isLoggedin)
  useEffect(() => {
    if (logged) {
      navigate('/user')
    } else {
      console.log("not logged")
    }
  }, [logged, navigate])

  return (
    <div>
      <AppHeader/>
      <Layout
        hero={
            <TextCard
              title={heroData.title}
              subtitles={heroData.subtitles}
              content={heroData.content}
            />
        }
        content={
          <Flex
            className="content"
          >
            <Card urlImage="/assets/icon-chat.png" alt="Chat Icon" title="You are our #1 priority" subtitle="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."/>
            <Card urlImage="/assets/icon-money.png" alt="Money Icon" title="More savings means higher rates" subtitle="The more you save with us, the higher your interest rate will be!" />
            <Card urlImage="/assets/icon-security.png" alt="Security Icon" title="Security you can trust" subtitle="We use top of the line encryption to make sure your data and money is always safe." />
          </Flex>
        }
      />
      <AppFooter/>
    </div>
  )
}

export default Page
