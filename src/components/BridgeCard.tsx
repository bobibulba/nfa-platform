import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

interface BridgeCardProps {
  title: string
  description: string
  fromImage: string
  toImage: string
  isAnimated?: boolean
}

export function BridgeCard({ title, description, fromImage, toImage, isAnimated }: BridgeCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-border/50">
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800">
              <img 
                src={fromImage} 
                alt="Static NFT"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=96&h=96&fit=crop`;
                }}
              />
            </div>
            <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
          </div>
          
          <ArrowRight className="w-8 h-8 text-orange-500" />
          
          <div className="relative">
            <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-orange-500/20 to-blue-500/20">
              <img 
                src={toImage} 
                alt="Dynamic NFA"
                className={`w-full h-full object-cover ${isAnimated ? 'animate-pulse' : ''}`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://images.unsplash.com/photo-1677442136019-21780ecad995?w=96&h=96&fit=crop`;
                }}
              />
            </div>
            {isAnimated && (
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl animate-pulse"></div>
            )}
          </div>
        </div>
        
        <p className="text-center text-muted-foreground text-sm">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
