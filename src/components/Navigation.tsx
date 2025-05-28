import React from 'react'
import { Button } from '@/components/ui/button'
import { Wallet, Bot, ChevronDown } from 'lucide-react'
import { useWallet } from '@/hooks/useWallet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Navigation() {
  const { isConnected, address, isConnecting, connectWallet, disconnectWallet, formatAddress } = useWallet()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
            NFA
          </span>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Button variant="ghost" className="text-foreground hover:text-orange-500">
            Account
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-orange-500">
            Marketplace
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-orange-500">
            Create
          </Button>
        </div>

        {/* Connect Wallet Button */}
        {!isConnected ? (
          <Button 
            onClick={connectWallet}
            disabled={isConnecting}
            className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white"
          >
            <Wallet className="w-4 h-4 mr-2" />
            {isConnecting ? 'Connecting...' : 'Connect Wallet'}
          </Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-orange-500/20 hover:border-orange-500/40">
                <Wallet className="w-4 h-4 mr-2" />
                {formatAddress(address!)}
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(address!)}>
                Copy Address
              </DropdownMenuItem>
              <DropdownMenuItem onClick={disconnectWallet}>
                Disconnect
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  )
}
