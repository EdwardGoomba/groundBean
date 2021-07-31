import styled from 'styled-components'

// styles
const Container = styled.div`
  display: grid;
  background: #fcf8f2;
  height: 100vh;
  justify-content: center;
`

const Maintenance = styled.div`
  display: grid;
  justify-items: center;
  align-content: start;

  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 1.5rem;
  }
`

const Home = () => {
  return (
    <Container>
      <Maintenance>
      <h1>Ground Bean Studio</h1>
      <p>Taking our advice and upgrading our own brand & website!</p>
        <span>edward@groundbean.studio</span>
      </Maintenance>
    </Container>
  )
}

export default Home
