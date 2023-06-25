import { defineStore } from 'pinia'
import { CONFIG } from '~/constants/config.const'
import { ref, useHead } from '#imports'

export interface IDocMeta {
  title?: string
  description?: string
  keywords?: string[]
}

export interface IBreadcrumbItemState {
  name: string
  isActive?: boolean
  icon?: string
  to?: string
}

export interface IPageMeta {
  title?: string
  layout?: string
  sub_title?: string
}

export interface IApp {
  updateDocMeta: (payload: IDocMeta) => void
  updatePageMeta: (payload: IPageMeta) => void
  pageMeta: IPageMeta
}

// export const wrapProperty =
//   (property: string, makeComputed = true) =>
//   () => {
//     const vm: any = getCurrentInstance()?.proxy

//     return makeComputed ? computed(() => vm[property]) : vm[property]
//   }

// export const useScrollTo: () => any = wrapProperty('$scrollTo', false)

export const useApp: () => IApp = defineStore('_app', () => {
  const pageMeta = ref<IPageMeta>({ title: CONFIG.APP_TITLE })

  const updateDocMeta = (payload: IDocMeta) => {
    useHead({
      title: `${payload.title} - ${CONFIG.APP_PAGE_PREFIX}`,
      meta: [
        { name: 'description', content: payload.description },
        { name: 'keywords', content: payload.keywords?.join(', ') },
      ],
    })
  }

  const updatePageMeta = (payload: IPageMeta) => {
    pageMeta.value = {
      ...pageMeta.value,
      ...payload,
    }
  }

  return {
    updateDocMeta,
    updatePageMeta,
    pageMeta,
  }
})
