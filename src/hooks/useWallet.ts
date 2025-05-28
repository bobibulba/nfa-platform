import { useState, useEffect } from 'react'

interface WalletState {
  isConnected: boolean
  address: string | null
  isConnecting: boolean
  error: string | null
}

declare global {
  interface Window {
    ethereum?: any
  }
}

export function useWallet() {
  const [wallet, setWallet] = useState<WalletState>({
    isConnected: false,
    address: null,
    isConnecting: false,
    error: null
  })

  useEffect(() => {
    checkConnection()
  }, [])

  const checkConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' })
        if (accounts.length > 0) {
          setWallet({
            isConnected: true,
            address: accounts[0],
            isConnecting: false,
            error: null
          })
        }
      } catch (error) {
        console.error('Error checking wallet connection:', error)
      }
    }
  }

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      setWallet(prev => ({
        ...prev,
        error: 'MetaMask is not installed. Please install MetaMask to continue.'
      }))
      return
    }

    setWallet(prev => ({ ...prev, isConnecting: true, error: null }))

    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })

      if (accounts.length > 0) {
        setWallet({
          isConnected: true,
          address: accounts[0],
          isConnecting: false,
          error: null
        })
      }
    } catch (error: any) {
      setWallet({
        isConnected: false,
        address: null,
        isConnecting: false,
        error: error.message || 'Failed to connect wallet'
      })
    }
  }

  const disconnectWallet = () => {
    setWallet({
      isConnected: false,
      address: null,
      isConnecting: false,
      error: null
    })
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return {
    ...wallet,
    connectWallet,
    disconnectWallet,
    formatAddress
  }
}
