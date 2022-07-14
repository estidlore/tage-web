const style = {
  width: "700px",
};

const Tips = () => {
  return (
    <div className="w mx p4" style={style}>
      <h1 className="mt3 mb2 secondary">Pomodoro</h1>
      <p>
        El método de pomodoro es una técnica que consiste en ciclos de
        concentración  y descanso, usualmente de 25 minutos y 5 minutos,
        respectivamente. Este permite mantener un equilibrio entre la
        labor y el descanso. Se basa en el tiempo que se suele mantener
        una persona en un estado de concentración, y en descansos que
        permiten reiniciar el proceso de concentración.
      </p>
      <h1 className="mt3 mb2 secondary">Métodos de Estudio</h1>
      <p>
        Hay muchos métodos con los que puedes aprender algo nuevo,
        desarrollar una habilidad o una actividad. Te presentamos
        algunos de los métodos de estudio más populares para que los
        apliques a tus sesiones de estudio de acuerdo a tus necesidades.
      </p>
      <div className="ml2">
        <h2 className="mt3 mb2 secondary">Active Recall</h2>
        <p>
          Este método de estudio se basa en aprender y memorizar
          algo que aprendemos. De esta manera lo que busca probar
          este método de estudio es ver como nuestro cerebro puede
          almacenar cierta información y recordarla.
        </p>
        <h2 className="mt3 mb2 secondary">Cornel</h2>
        <p>
          Toma de notas, con un formato específico con el fin de tener
          una buena información organizada y condensada y a la vez que
          tengan relación entre cada parte de información que haya en
          el formato.
        </p>
        <h2 className="mt3 mb2 secondary">Cuadros Comparativos</h2>
        <p>
          Permite comparar una información con otra y de esa manera
          utilizar o guiarse por la que es más importante y
          significativa. Este método ayuda a recortar información
          innecesario al momento de realizar un trabajo.
        </p>
        <h2 className="mt3 mb2 secondary">ERRRE</h2>
        <p>
          Exploración, recepción, reflexión, repaso, y evaluación.
          Básicamente es un método de estudio que siguiendo sus
          conceptos ayudan a las personas a entender, aprender y
          repasar distintos temas.
        </p>
        <h2 className="mt3 mb2 secondary">Feynman</h2>
        <p>
          Busca que las personas puedan entender algo y aprenderlo.
          Básicamente es un método de estudio mental que tiene como 4
          pasos escoger un concepto, enseñarlo, retroceder, y revisar
          y simplificar.
        </p>
        <h2 className="mt3 mb2 secondary">Mapas Mentales</h2>
        <p>
          El mapa mental es ese método de estudio que nos permite
          organizar información de una manera mucho más organizada y
          por sectores, ósea que podemos decir que los mapas mentales
          nos hacen ver las ideas de una manera y hacer que se
          conecten con otras o den a luz nuevas ideas.
        </p>
      </div>
    </div>
  );
}

export default Tips;
