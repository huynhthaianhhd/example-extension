import { runtime, tabs, Tabs, Runtime, storage } from 'webextension-polyfill'


const OIDC_CLIENT_ID = '2cae5412-1ff5-4081-b51c-20a7ac319374'
const OIDC_SCOPE = 'openid offline'
const OIDC_AUTHORIZATION_ENDPOINT = 'https://api-gateway.skymavis.one/oauth2/auth'

const browser: any = (() => {
  //@ts-ignore
  if (typeof chrome === 'object') {
    //@ts-ignore
    return chrome
  }
  //@ts-ignore
  if (typeof browser === 'object') {
    //@ts-ignore
    return browser
  }
})()

/**
 * Define background script functions
 * @type {class}
 */

class Background {
  _port: number | undefined
  constructor() {
    this.init()
  }

  /**
   * Document Ready
   *
   * @returns {void}
   */
  init = () => {
    console.log('[===== Loaded Background Scripts =====]')

    //When extension installed
    runtime.onInstalled.addListener(this.onInstalled)

    //Add message listener in Browser.
    runtime.onMessage.addListener(this.onMessage)

    //Add Update listener for tab
    tabs.onUpdated.addListener(this.onUpdatedTab)

    //Add New tab create listener
    tabs.onCreated.addListener(this.onCreatedTab)
  }

  /**
   * Extension Installed
   */
  onInstalled = () => {
    console.log('[===== Installed Extension!] =====')
  }

  /**
   * Message Handler Function
   *
   * @param message
   * @param sender
   * @returns
   */
  onMessage = async (message: EXTMessage, sender: Runtime.MessageSender) => {
    try {
      console.log('[===== Received messagessss =====]', message, sender)
      const redirect_uri = browser.identity.getRedirectURL()
      console.log('SIGN IN REDIRECT URI: ', redirect_uri)

      switch (message.type) {
        case 'login': {
          const query = new URLSearchParams({
            state: crypto.randomUUID(),
            client_id: OIDC_CLIENT_ID,
            response_type: 'code',
            scope: OIDC_SCOPE,
            remember: 'false',
            redirect_uri,
          })

          const url = `${OIDC_AUTHORIZATION_ENDPOINT}?${query.toString()}`

          console.log('SIGN IN URL: ', url)
          browser.identity.launchWebAuthFlow(
            { url, interactive: true },
            async function (callbackUrl: string) {
              if (browser.runtime.lastError) {
                console.log('lastError', browser.runtime.lastError.message)
                return null
              }
              const code = new URL(callbackUrl).searchParams.get('code') || ''

              storage.local.set({ token: code })
            },
          )
        }
      }
      return true
    } catch (error) {
      console.log('[===== Error in MessageListener =====]', error)
      return error
    }
  }

  /**
   * Message from Long Live Connection
   *
   * @param msg
   */
  onMessageFromExtension = (msg: EXTMessage) => {
    console.log('[===== Message from Long Live Connection =====]')
  }

  /**
   *
   * @param tab
   */
  onCreatedTab = (tab: Tabs.Tab) => {
    console.log('[===== New Tab Created =====]', tab)
  }

  /**
   * When changes tabs
   *
   * @param {*} tabId
   * @param {*} changeInfo
   * @param {*} tab
   */
  onUpdatedTab = (
    tabId: number,
    changeInfo: Tabs.OnUpdatedChangeInfoType,
    tab: Tabs.Tab,
  ) => {
    console.log('[===== Tab Created =====]', tabId)
  }

  /**
   * Get url from tabId
   *
   */
  getURLFromTab = async (tabId: number) => {
    try {
      const tab = await tabs.get(tabId)
      return tab.url || ''
    } catch (error) {
      console.log(
        `[===== Could not get Tab Info$(tabId) in getURLFromTab =====]`,
        error,
      )
      throw ''
    }
  }

  /**
   * Open new tab by url
   *
   */
  openNewTab = async (url: string) => {
    try {
      const tab = await tabs.create({ url })
      return tab
    } catch (error) {
      console.log(`[===== Error in openNewTab =====]`, error)
      return null
    }
  }

  /**
   * Close specific tab
   *
   * @param {number} tab
   */
  closeTab = async (tab: Tabs.Tab) => {
    try {
      await tabs.remove(tab.id ?? 0)
    } catch (error) {
      console.log(`[===== Error in closeTab =====]`, error)
    }
  }

  /**
   * send message
   */
  sendMessage = async (tab: Tabs.Tab, msg: EXTMessage) => {
    try {
      const res = await tabs.sendMessage(tab.id ?? 0, msg)
      return res
    } catch (error) {
      console.log(`[===== Error in sendMessage =====]`, error)
      return null
    }
  }
}

export const background = new Background()
