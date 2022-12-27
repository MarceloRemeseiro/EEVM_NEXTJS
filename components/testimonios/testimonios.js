import Image from "next/image";


function Testimonios({data}) {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-body text-uppercase mb-2">Testimonios</h6>
              <h1 className="display-6 mb-0">Dios hace grandes cosas!</h1>
            </div>
            <p className="mb-4">
              Dios hace grandes cosas. Esta es una verdad que se encuentra en
              toda la Biblia y es algo que podemos experimentar en nuestras
              propias vidas. Muchas veces, cuando enfrentamos problemas o
              desafíos, es fácil sentirnos abrumados y sin esperanza. Pero Dios
              es el Dios de la restauración y el milagro. Él puede tomar lo que
              parece imposible y hacerlo posible.
              <br />
              <br />
              Una vez, Jesús estaba en la orilla del mar cuando vio a una
              multitud que lo seguía. Él sintió compasión por ellos y comenzó a
              enseñarles. Luego, al final del día, le preguntó a sus discípulos
              cómo iban a alimentar a tanta gente. Aunque ellos no tenían
              suficiente dinero para comprar alimento, Jesús les dijo que
              trajeran lo que tenían. Así que le entregaron cinco panes y dos
              peces. Jesús oró, partió el pan y los peces y los entregó a los
              discípulos para que los repartieran entre la multitud. Y así lo
              hicieron, y todos comieron y quedaron satisfechos. Lo que había
              parecido imposible, Dios lo hizo posible y multiplicó el pan y los
              peces para saciar a toda la gente.
              <br /> <br />
              Este es sólo un ejemplo de cómo Dios hace grandes cosas. Si
              estamos dispuestos a poner nuestra confianza en Él y seguir sus
              planes, Él puede hacer cosas increíbles en nuestras vidas. Así que
              no te rindas, no pierdas la esperanza. Dios está contigo y puede
              hacer cosas maravillosas si le dejamos tomar el control.
            </p>
          </div>
          <div
            className="col-lg-7 wow fadeInUp overflow-scroll"
            data-wow-delay="0.5s"
          >
            <div className="scroll " style={{ height: "200px" }}>
              {data?.map((testimonio) => (
                <div key={testimonio.properties.nombre.title[0].plain_text}>
                  <h5>{testimonio.properties.nombre.title[0].plain_text}</h5>
                  <span>{testimonio.properties.profesion.rich_text[0]
                            .plain_text}</span>
                  <div>
                    <Image
                      src={testimonio.properties.foto.files[0].file.url}
                      alt=""
                      width={80}
                      height={80}
                    />
                  </div>
                  <div>{testimonio.properties.testimonio.rich_text[0]
                            .plain_text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonios;
