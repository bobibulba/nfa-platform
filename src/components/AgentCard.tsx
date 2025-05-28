import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface AgentCardProps {
  name: string
  category: string
  description: string
  image: string
  isSelected?: boolean
  onClick?: () => void
}

export function AgentCard({ name, category, description, image, isSelected, onClick }: AgentCardProps) {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-border/50 ${
        isSelected ? 'ring-2 ring-orange-500 shadow-lg' : ''
      }`}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-orange-500/20 to-blue-500/20 flex items-center justify-center">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://images.unsplash.com/photo-1677442136019-21780ecad995?w=64&h=64&fit=crop&crop=face`;
              }}
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-lg">{name}</h3>
              <Badge variant="secondary" className="text-xs bg-orange-500/20 text-orange-400">
                {category}
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              {description}
            </p>
            {isSelected && (
              <Button size="sm" className="bg-gradient-to-r from-orange-500 to-blue-600">
                Selected
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
