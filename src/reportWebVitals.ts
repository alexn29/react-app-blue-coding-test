import type { ReportHandler } from 'web-vitals'

const reportWebVitals = async (onPerfEntry?: ReportHandler): Promise<void> => {
  if (onPerfEntry !== null && onPerfEntry instanceof Function) {
    try {
      const webVitals = await import('web-vitals')
      // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    } catch (error) {
      console.error('error: ', error)
    }
  }
}

export default reportWebVitals
