import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface AgentIDCardProps {
  id: string
  price: string
  image: string
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export function AgentIDCard({ id, price, image, rarity }: AgentIDCardProps) {
  const rarityColors = {
    common: 'bg-gray-500',
    rare: 'bg-blue-500',
    epic: 'bg-purple-500',
    legendary: 'bg-yellow-500'
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
      <CardContent className="p-4">
        <div className="relative mb-4">
          <div className="w-full h-32 rounded-lg overflow-hidden bg-gradient-to-br from-orange-500/20 to-blue-500/20 flex items-center justify-center">
            <img 
              src={image} 
              alt={`Agent ID ${id}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=200&h=128&fit=crop`;
              }}
            />
          </div>
          <Badge 
            className={`absolute top-2 right-2 text-white ${rarityColors[rarity]}`}
          >
            {rarity}
          </Badge>
        </div>
        
        <div className="text-center">
          <h3 className="font-bold text-lg mb-1">#{id}</h3>
          <p className="text-2xl font-bold text-orange-500 mb-3">{price} BNB</p>
          <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
            Reserve ID
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
