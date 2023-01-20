let chart = new CanvasJS.Chart("chartContainer");

const cargarGrafico = (dolar, euro) => {

    dolar = dolar.map(valor => {
        let obj = {
            label:valor.fecha.slice(0,10),
            y:valor.valor
        }
        return obj
    })

    euro = euro.map(valor => {
        let obj = {
            label:valor.fecha.slice(0,10),
            y:valor.valor
        }
        return obj
    })

    console.log(dolar, euro)
    

  chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title: {
      text: "Comparación Dólar - Euro",
    },
    /* axisX: {
      valueFormatString: "DD MMM,YY",
    }, */
    axisY: {
      title: "Dólar - Euro",
    },
    legend: {
      cursor: "pointer",
      fontSize: 16,
      itemclick: toggleDataSeries,
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        name: "Dólar",
        type: "spline",
        yValueFormatString: "#0.## USD",
        showInLegend: true,
        dataPoints: dolar,
      },
      {
        name: "Euro",
        type: "spline",
        yValueFormatString: "#0.## EUR",
        showInLegend: true,
        dataPoints: euro,
      },
    ],
  });
  chart.render();

}

function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }

  const getData = async (divisa, fecha) => {
    let url = `https://mindicador.cl/api/${divisa}/${fecha}`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }



  formulario.addEventListener("submit", async (event) => {
    console.log("Probando")
    event.preventDefault();
    Promise.all([getData("dolar", fecha.value), getData("euro", fecha.value)]).then(respuesta => {
        let dolar = respuesta[0].serie;
        let euro = respuesta[1].serie;
        cargarGrafico(dolar, euro)
        
    }).catch(error => {
        alert("Error al consultar al servidor");
        console.log(error);
    })

  })