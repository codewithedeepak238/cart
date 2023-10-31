import { Card } from "../components/Card"
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'

export const ProductDetail = () => {
  return (
    <main className="min-h-screen">
      <div className="flex flex-wrap align-center justify-center mt-10 mb-10">
        <Card img={img1} product={'Sony Wh-50hw'} price={'$149'}/>
        <Card img={img2} product={'Crust Yh-69'} price={'$299'}/>
        <Card img={img1} product={'JBL Alpha-30hm'} price={'$691'}/>
        <Card img={img2} product={'Boult Buds'} price={'$288'}/>
        <Card img={img1} product={'Sony Wh-65ek'} price={'$349'}/>
        <Card img={img2} product={'JBL Wh-98mz'} price={'$199'}/>
      </div>
    </main>
  )
}
