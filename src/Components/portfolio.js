import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import Background from "../Images/darkbg.svg";
import chain1 from "../Images/chainlogo1.svg";
import chain2 from "../Images/chainlogo2.svg";
import chain3 from "../Images/chainlogo3.svg";
import chain4 from "../Images/chainlogo4.svg";
import chain5 from "../Images/chainlogo5.svg";
import chain6 from "../Images/chainlogo6.svg";
import chain7 from "../Images/chainlogo7.svg";
import { motion } from 'framer-motion';

const HeroPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [phishingLink, setPhishingLink] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const heroStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 0',
  };

  const textStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: 'clamp(36px, 8vw, 96px)',
    fontWeight: 800,
    lineHeight: '1.2',
    textAlign: 'center',
    background: 'linear-gradient(45deg, #000E12 0%, #063D4F 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '1.5rem',
  };

  const subTextStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: 'clamp(14px, 3vw, 18px)',
    fontWeight: 400,
    lineHeight: '1.6',
    textAlign: 'center',
    color: '#FFFFFF',
    maxWidth: '600px',
    margin: '0 auto 1.5rem',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: 'clamp(14px, 2.5vw, 18px)',
    fontWeight: 600,
    border: 'none',
    margin: '0.5rem',
  };

  const chainContainerStyle = {
    position: 'relative',
    height: 'clamp(60px, 15vw, 80px)',
    marginTop: '2rem',
  };

  const chainStyle = (index, totalChains) => {
    const angle = (index / (totalChains - 1)) * Math.PI;
    const x = 50 + 25 * Math.cos(angle);
    const y = 50 + 25 * Math.sin(angle);
    return {
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      transform: 'translate(-50%, -50%)',
      width: 'clamp(20px, 5vw, 30px)',
      height: 'clamp(20px, 5vw, 30px)',
    };
  };

  const chainImages = [chain1, chain2, chain3, chain4, chain5, chain6, chain7];

  const handlePhishingDetect = (e) => {
    e.preventDefault();
    // Add your phishing detection logic here
    console.log('Detecting phishing for:', phishingLink);
  };

  return (
    <div style={heroStyle}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <motion.h1
              style={textStyle}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              PHISHING LINK DETECTOR
            </motion.h1>
            <motion.p
              style={subTextStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Don't fall for traps! Ensure the links you click are safe.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              style={{ maxWidth: '600px', margin: '1rem auto' }}
            >
              <Form onSubmit={handlePhishingDetect}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Enter URL to check for phishing"
                    value={phishingLink}
                    onChange={(e) => setPhishingLink(e.target.value)}
                    style={{ borderRadius: '50px 0 0 50px' }}
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    style={{
                      ...buttonStyle,
                      backgroundColor: '#0F4A5D',
                      borderRadius: '0 50px 50px 0',
                      margin: 0,
                    }}
                  >
                    Detect
                  </Button>
                </InputGroup>
              </Form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                variant="secondary"
                style={{ ...buttonStyle, backgroundColor: 'rgba(44, 59, 64, 0.5)' }}
              >
                Build in the Dark
              </Button>
            </motion.div>
            <motion.div
              style={chainContainerStyle}
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {chainImages.map((chain, index) => (
                <motion.img
                  key={index}
                  src={chain}
                  alt={`Chain ${index + 1}`}
                  style={chainStyle(index, chainImages.length)}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                />
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroPage;
