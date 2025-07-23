// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { Shield, Lock, User, CheckCircle, Star, Users, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getFeatureCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['auth-feature-card-0', 'auth-feature-card-1', 'auth-feature-card-2', 'auth-feature-card-3'];
  return ids[index] || 'noID';
};

const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['auth-stat-card-0', 'auth-stat-card-1', 'auth-stat-card-2', 'auth-stat-card-3'];
  return ids[index] || 'noID';
};

const getTestimonialCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['testimonial-card-0', 'testimonial-card-1', 'testimonial-card-2'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const authFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Secure Authentication",
      description: "Industry-standard security with encrypted sessions and secure password handling"
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: "Protected Routes",
      description: "Role-based access control ensuring users only see what they're authorized to access"
    },
    {
      icon: <User className="w-8 h-8 text-purple-500" />,
      title: "User Management",
      description: "Complete user profile management with preferences and activity tracking"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Fast & Reliable",
      description: "Lightning-fast authentication with persistent sessions and automatic token refresh"
    }
  ];

  const stats = [
    { label: "Active Users", value: "10K+" },
    { label: "Uptime", value: "99.9%" },
    { label: "Security Score", value: "A+" },
    { label: "Response Time", value: "<100ms" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      content: "The authentication system is incredibly smooth and secure. Our users love the seamless experience.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Developer",
      content: "Easy to integrate and customize. The documentation is excellent and the API is intuitive.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Security Analyst",
      content: "Impressed by the security features and compliance standards. Exactly what we needed.",
      rating: 5
    }
  ];

  return (
    <Container componentId="auth-landing-page">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with gradient background"
        className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"
      >
        {/* Header */}
        <Header 
          devId="main-header" 
          devName="Main Header" 
          devDescription="Primary site header with navigation"
          className="container mx-auto px-4 py-6"
        >
          <Nav 
            devId="main-nav" 
            devName="Main Navigation" 
            devDescription="Primary navigation bar"
            className="flex items-center justify-between"
          >
            <Div 
              devId="logo-section" 
              devName="Logo Section" 
              devDescription="Company logo and brand name"
              className="flex items-center space-x-2"
            >
              <Div devId="noID" className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </Div>
              <Span 
                devId="brand-name" 
                devName="Brand Name" 
                devDescription="Auth Test Project brand name"
                className="text-xl font-bold text-white"
              >
                AuthTest Pro
              </Span>
            </Div>
            <Div 
              devId="nav-actions" 
              devName="Navigation Actions" 
              devDescription="Navigation buttons and user menu"
              className="flex items-center space-x-4"
            >
              <Button 
                devId="docs-button" 
                devName="Docs Button" 
                devDescription="Link to documentation"
                variant="ghost" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Documentation
              </Button>
              {isAuthenticated ? (
                <Div 
                  devId="user-section" 
                  devName="User Section" 
                  devDescription="Authenticated user welcome area"
                  className="flex items-center space-x-4"
                >
                  <Span 
                    devId="welcome-message" 
                    devName="Welcome Message" 
                    devDescription="Welcome message for authenticated user"
                    className="text-gray-300"
                  >
                    Welcome back, {user?.name?.split(' ')[0]}!
                  </Span>
                  <Link to="/dashboard">
                    <Button 
                      devId="nav-dashboard-button"
                      devName="Navigation Dashboard Button"
                      devDescription="Dashboard button in navigation header for authenticated users"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Dashboard
                    </Button>
                  </Link>
                </Div>
              ) : (
                <Div 
                  devId="auth-buttons" 
                  devName="Authentication Buttons" 
                  devDescription="Login and register buttons for unauthenticated users"
                  className="flex items-center space-x-2"
                >
                  <Link to="/login">
                    <Button 
                      devId="nav-login-button"
                      devName="Navigation Login Button"
                      devDescription="Login button in navigation header"
                      variant="ghost" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button 
                      devId="nav-register-button"
                      devName="Navigation Register Button"
                      devDescription="Get started button in navigation header"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Get Started
                    </Button>
                  </Link>
                </Div>
              )}
            </Div>
          </Nav>
        </Header>

        {/* Hero Section */}
        <Container componentId="hero-section">
          <Section 
            devId="hero-content" 
            devName="Hero Content" 
            devDescription="Main hero section with title and call-to-action"
            className="container mx-auto px-4 py-20 text-center"
          >
            <Div 
              devId="hero-content-wrapper" 
              devName="Hero Content Wrapper" 
              devDescription="Animated wrapper for hero content"
              className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <H1 
                devId="hero-title" 
                devName="Hero Title" 
                devDescription="Main hero title showcasing authentication system"
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Secure
                <Span 
                  devId="auth-highlight" 
                  devName="Authentication Highlight" 
                  devDescription="Highlighted authentication text in gradient"
                  className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  {' '}Authentication
                </Span>
                <br />Made Simple
              </H1>
              <P 
                devId="hero-description" 
                devName="Hero Description" 
                devDescription="Hero section description explaining the authentication benefits"
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Experience seamless user authentication with enterprise-grade security, 
                intuitive user management, and lightning-fast performance.
              </P>
              <Div 
                devId="hero-cta-buttons" 
                devName="Hero CTA Buttons" 
                devDescription="Call-to-action buttons in hero section"
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {isAuthenticated ? (
                  <Link to="/dashboard">
                    <Button 
                      devId="hero-dashboard-button"
                      devName="Hero Dashboard Button"
                      devDescription="Primary call-to-action button to access dashboard"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                    >
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/register">
                      <Button 
                        devId="hero-start-button"
                        devName="Start Free Button"
                        devDescription="Primary call-to-action button to start using the system"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                      >
                        <ArrowRight className="w-5 h-5 mr-2" />
                        Start Free Trial
                      </Button>
                    </Link>
                    <Link to="/login">
                      <Button 
                        devId="hero-signin-button"
                        devName="Sign In Button"
                        devDescription="Secondary button to sign in for existing users"
                        variant="outline"
                        className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                      >
                        Sign In
                      </Button>
                    </Link>
                  </>
                )}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Stats Section */}
        <Container componentId="stats-section">
          <Section 
            devId="stats-content" 
            devName="Stats Content" 
            devDescription="Statistics section showing system metrics"
            className="container mx-auto px-4 py-12"
          >
            <Div 
              devId="stats-grid" 
              devName="Stats Grid" 
              devDescription="Grid container for statistics cards"
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  devId={getStatCardId(index)}
                  devName={`${stat.label} Stat Card`}
                  devDescription={`Statistical card showing ${stat.label}: ${stat.value}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="text-2xl font-bold text-white mb-2">{stat.value}</Div>
                    <Div devId="noID" className="text-gray-400">{stat.label}</Div>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Features Section */}
        <Container componentId="features-section">
          <Section devId="noID" className="container mx-auto px-4 py-20">
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Powerful Authentication Features</H2>
              <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
                Everything you need for secure, scalable user authentication and management
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {authFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  devId={getFeatureCardId(index)}
                  devName={`${feature.title} Feature Card`}
                  devDescription={`Feature card highlighting ${feature.title}: ${feature.description}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="mb-4">{feature.icon}</Div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <P devId="noID" className="text-gray-400">{feature.description}</P>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* Testimonials Section */}
        <Container componentId="testimonials-section">
          <Section devId="noID" className="container mx-auto px-4 py-20">
            <Div devId="noID" className="text-center mb-16">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">What Our Users Say</H2>
              <P devId="noID" className="text-gray-300 max-w-2xl mx-auto">
                Trusted by developers and businesses worldwide
              </P>
            </Div>
            <Div devId="noID" className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  devId={getTestimonialCardId(index)}
                  devName={`${testimonial.name} Testimonial Card`}
                  devDescription={`Testimonial card from ${testimonial.name}: ${testimonial.content}`}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <CardContent devId="noID" className="p-0">
                    <Div devId="noID" className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </Div>
                    <P devId="noID" className="text-gray-300 mb-4">"{testimonial.content}"</P>
                    <Div devId="noID">
                      <Div devId="noID" className="font-semibold text-white">{testimonial.name}</Div>
                      <Div devId="noID" className="text-sm text-gray-400">{testimonial.role}</Div>
                    </Div>
                  </CardContent>
                </Card>
              ))}
            </Div>
          </Section>
        </Container>

        {/* CTA Section */}
        <Container componentId="cta-section">
          <Section devId="noID" className="container mx-auto px-4 py-20">
            <Div devId="noID" className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-blue-500/30">
              <H2 devId="noID" className="text-4xl font-bold text-white mb-4">Ready to Get Started?</H2>
              <P devId="noID" className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust our authentication system for their applications
              </P>
              <Div devId="noID" className="flex flex-col sm:flex-row gap-4 justify-center">
                {!isAuthenticated && (
                  <>
                    <Link to="/register">
                      <Button 
                        devId="cta-signup-button"
                        devName="CTA Sign Up Button"
                        devDescription="Primary CTA button to sign up for the service"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                      >
                        <span className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          Sign Up Free
                        </span>
                      </Button>
                    </Link>
                    <Button 
                      devId="cta-learn-more"
                      devName="Learn More Button"
                      devDescription="Secondary CTA button to learn more about the service"
                      variant="outline"
                      className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Learn More
                      </span>
                    </Button>
                  </>
                )}
              </Div>
            </Div>
          </Section>
        </Container>

        {/* Footer */}
        <Footer 
          devId="main-footer" 
          devName="Main Footer" 
          devDescription="Site footer with links and copyright"
          className="container mx-auto px-4 py-8 border-t border-white/10"
        >
          <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
            <Div devId="noID" className="text-gray-400 mb-4 md:mb-0">
              © 2024 AuthTest Pro. Secure authentication made simple.
            </Div>
            <Div devId="noID" className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </Div>
          </Div>
        </Footer>
      </Div>
    </Container>
  );
};