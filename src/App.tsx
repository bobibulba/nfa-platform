import React, { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { AgentCard } from '@/components/AgentCard'
import { AgentIDCard } from '@/components/AgentIDCard'
import { BridgeCard } from '@/components/BridgeCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bot, Code, Zap, Sparkles } from 'lucide-react'

const agents = [
  {
    id: 1,
    name: "AI Assistant Pro",
    category: "Productivity",
    description: "Advanced AI assistant for task automation and productivity enhancement",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=64&h=64&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Trading Bot Alpha",
    category: "Finance",
    description: "Intelligent trading bot with advanced market analysis capabilities",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=64&h=64&fit=crop"
  },
  {
    id: 3,
    name: "Creative Companion",
    category: "Art & Design",
    description: "AI-powered creative assistant for artists and designers",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=64&h=64&fit=crop"
  }
]

const agentIDs = [
  { id: "001", price: "0.5", rarity: "legendary" as const, image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=200&h=128&fit=crop" },
  { id: "042", price: "0.3", rarity: "epic" as const, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&h=128&fit=crop" },
  { id: "123", price: "0.2", rarity: "rare" as const, image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&h=128&fit=crop" },
  { id: "456", price: "0.1", rarity: "common" as const, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=128&fit=crop" }
]

function App() {
  const [selectedAgent, setSelectedAgent] = useState(1)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Meet Your First Agent
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover programmable AI agents that live on the blockchain. Choose your companion and enter the future of Web3.
          </p>
        </div>
      </section>

      {/* Agent Selection Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Agent</h2>
            <p className="text-muted-foreground">Select from our collection of specialized AI agents</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {agents.map((agent) => (
              <AgentCard
                key={agent.id}
                name={agent.name}
                category={agent.category}
                description={agent.description}
                image={agent.image}
                isSelected={selectedAgent === agent.id}
                onClick={() => setSelectedAgent(agent.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reserve Agent ID Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Reserve Your Agent ID</h2>
            <p className="text-muted-foreground">Stake BNB to secure your unique agent identifier</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {agentIDs.map((agentID) => (
              <AgentIDCard
                key={agentID.id}
                id={agentID.id}
                price={agentID.price}
                image={agentID.image}
                rarity={agentID.rarity}
              />
            ))}
          </div>
        </div>
      </section>

      {/* NFA Bridge Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">NFA Bridge</h2>
            <p className="text-muted-foreground">Transform static NFTs into dynamic, programmable agents</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <BridgeCard
              title="Static to Dynamic"
              description="Convert your static NFT into a living, breathing agent"
              fromImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=96&h=96&fit=crop"
              toImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=96&h=96&fit=crop"
              isAnimated={true}
            />
            <BridgeCard
              title="Enhanced Capabilities"
              description="Unlock programmable features and blockchain interactions"
              fromImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=96&h=96&fit=crop"
              toImage="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=96&h=96&fit=crop"
              isAnimated={true}
            />
          </div>
        </div>
      </section>

      {/* Programmable Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Agents Aren't Just Live, They're Programmable</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the next generation of AI agents with advanced programmable capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Smart Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Agents can execute smart contracts autonomously, handling complex blockchain operations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Real-time Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Continuous learning and adaptation based on user interactions and market conditions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Custom Behaviors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Program unique behaviors and responses tailored to your specific needs and preferences
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-orange-500 to-blue-600 text-white border-0">
            <CardContent className="p-12">
              <Bot className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Your First Agent is Waiting</h2>
              <p className="text-lg mb-8 opacity-90">
                Join the revolution of programmable AI agents. Start your journey into the future of Web3.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                Get Started Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 NFA Platform. Built with the future in mind.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
