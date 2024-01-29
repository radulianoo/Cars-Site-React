import Card from "./Card";

function MainContent() {
    return <main className="cars-main-content">
        <Card title="Ferrari" price={499} imageUrl="https://png.pngtree.com/png-vector/20220416/ourmid/pngtree-red-ferrari-from-the-front-png-image_4545805.png" />
        <Card title="BMW" price={299} imageUrl="https://images.carprices.com/pricebooks_data/usa/colorized/2024/BMW/View2/X5_M/X5_M/24XK_300.png" />
        <Card title="Ford" price={199} imageUrl="https://www.vdm.ford.com/content/dam/vdm_ford/live/en_us/ford/nameplate/explorer/2024/collections/3-2/23_frd_epr_st_agbl_rpro_280x121.png/jcr:content/renditions/cq5dam.web.1280.1280.png" />
        <Card title="Skoda" price={99} imageUrl="https://www.electrifying.com/files/NJrrkeCgrZQIS_WI/Skoda%20Superb%20static.png" />
    </main>
}

export default MainContent;