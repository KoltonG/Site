/** Imports */
import React, { useState } from 'react'

// Components
import { Helmet } from 'react-helmet'

// Styles
import { css } from '@emotion/core'

// Images
import background from '../images/background.png'
import name from '../images/name.png'
import favicon from '../images/favicon.ico'

/** Components */
const Name = () => (
  <div
    css={css`
      background-image: url(${name});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right;

      @media (max-width: 650px) {
        order: 2;
      }
    `}
  ></div>
)

/** Component - Content
 * Renders the menu items for the about and contact section of the page
 */
const Content = () => {
  enum Menu {
    About,
  }

  /* State */
  const [menu, setMenu] = useState<Menu>(null!)

  /* Handlers */
  const onClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    selectedMenu: Menu
  ) => {
    event.preventDefault()

    menu === selectedMenu ? setMenu(null!) : setMenu(selectedMenu)
  }

  /* Render */
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;

        @media (max-width: 650px) {
          align-items: flex-start;
        }

        div {
          transition: all 500ms;
        }

        a {
          color: #fff;
          text-decoration: none;
          font-size: 36px;
          font-weight: 300;
        }

        p {
          font-size: 18px;
          font-weight: 300;
        }
      `}
    >
      <a href="#" onClick={(e) => onClick(e, Menu.About)}>
        about.
      </a>
      <div
        css={css`
          height: 0;
          overflow: hidden;
          flex-grow: ${menu === Menu.About ? 1 : 0};
        `}
      >
        <p>
          I am a software engineer with a passion of creating meaningful
          technologies that advance humanity and reduce inequality within our
          society.
        </p>
        <p>
          With over ten years of experience in the Canadian startup ecosystem, I
          was the former CTO of Simptek, an energy effient company, and a
          long-time conference speaker.
        </p>
        <p>
          Currently working with a Califonia-based startup as the Staff
          Engineer, I am hoping to connect with tech lover and change makers out
          there!
        </p>
      </div>
    </div>
  )
}

/** Export */
export default () => (
  <>
    {/* Meta */}
    <Helmet>
      <title>Kolton Gagnon</title>
      <meta
        name="description"
        content="Kolton is a software engineer with a passion of creating meaningful technologies that advance humanity and reduce inequality within our society."
      />
      <link rel="icon" type="image/png" href={favicon} sizes="256x256" />
    </Helmet>
    {/* Page Content */}
    <div
      css={css`
        background-image: url(${background});
        background-size: cover;
        height: 100vh;
        display: grid;
        grid-template-columns: 3fr 1fr;
        width: 100%;
        grid-gap: 100px;
        padding: 40px;
        box-sizing: border-box;

        @media (max-width: 900px) {
          grid-template-columns: 2fr 1fr;
          grid-gap: 40px;
        }
      `}
    >
      <Name />
      <Content />
    </div>
  </>
)
