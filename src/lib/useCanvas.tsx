import { useState, useEffect, } from 'react'
import { CanvasInterface, CanvasClient } from '@dscvr-one/canvas-client-sdk';

type CanvasState = {
  client: CanvasClient | undefined;
  user: CanvasInterface.Lifecycle.User | undefined;
  content: CanvasInterface.Lifecycle.Content | undefined;
  isReady: boolean;
}

export default function useCanvas() {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    client: undefined,
    user: undefined,
    content: undefined,
    isReady: false,
  })

  //setup client on first mount
  useEffect(() => {
    async function initCanvas() {
      const canvasClient = new CanvasClient();

      try {
        const res = await canvasClient.ready()
        setCanvasState({
          client: canvasClient,
          user: res.untrusted.user,
          content: res.untrusted.content,
          isReady: true
        })
      } catch (err) {
        setCanvasState((prev) => ({
          ...prev,
          isReady: true
        }))
      }
    }

    initCanvas()

  }, [])

  return canvasState;
}
