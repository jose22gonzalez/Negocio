import { useState, useEffect } from "react"
import Footer from "./footer";


let data = [


    {
        Codigo: 1,
        Peso: 15,
        Cantidad: 15,
        descripcion: "Camisa Polo",
        PrecioUnitario: 11.99,
    },

    {
        Codigo: 2,
        Peso: 20,
        Cantidad: 38,
        descripcion: "Camisa Polo con estampado",
        PrecioUnitario: 9.89,
    },

    {
        Codigo: 3,
        Peso: 85,
        Cantidad: 10,
        descripcion: "Zapatilla de Skate deportiva",
        PrecioUnitario: 24.10,
    },

    {
        Codigo: 4,
        Peso: 123,
        Cantidad: 65,
        descripcion: "Pantalon Deportivo",
        PrecioUnitario: 14.50
    },

    { Codigo: 5, Peso: 53, Cantidad: 5, descripcion: "Chaqueta de borbaderos", PrecioUnitario: 20.50 },
    { Codigo: 6, Peso: 73, Cantidad: 23, descripcion: "Jeans con bolsillo con solapa", PrecioUnitario: 26.99 },
    { Codigo: 7, Peso: 8, Cantidad: 12, descripcion: "Mocasines minimalistas", PrecioUnitario: 24.50 },
    { Codigo: 8, Peso: 6, Cantidad: 5, descripcion: "1 pieza blazer y 1 pieza pant.", PrecioUnitario: 53.49 },
    { Codigo: 9, Peso: 125, Cantidad: 20, descripcion: "Zapatilla deportivas arriba alta", PrecioUnitario: 27.10 },
    { Codigo: 10, Peso: 125, Cantidad: 20, descripcion: "Zapatilla deportivas arriba alta Est.", PrecioUnitario: 30.10 }
]


let DatosCompra = [
    {
        Codigo: 1,
        PorcentajePeso: 2,
        Peso: 15,
        Cantidad: 15,
        descripcion: "Camisa Polo",
        PrecioUnitario: 11.99,
        SubTotal: 179.85,
        RD: 9855.78,
        PorcentajePesORD: 4,
        PesoRD: 3375.00,
        Transporte: 945.50,
        TotalGastos: 4320.50,
        Total: 14176.28,
        CostoUnit: 945.09,
        PrecioUnit: 1512.14,
        PrecioArticulo: 0
    },

    {
        Codigo: 2,
        PorcentajePeso: 3,
        Peso: 20,
        Cantidad: 38,
        descripcion: "Camisa Polo con estampado",
        PrecioUnitario: 9.89,
        SubTotal: 375.82,
        RD: 20594.94,
        PorcentajePesORD: 9,
        PesoRD: 4500.00,
        Transporte: 1260.66,
        TotalGastos: 5760.66,
        Total: 2655.60,
        CostoUnit: 693.57,
        PrecioUnit: 1109.71,
        PrecioArticulo: 0
    },

    {
        Codigo: 3,
        PorcentajePeso: 13,
        Peso: 85,
        Cantidad: 10,
        descripcion: "Zapatilla de Skate deportiva",
        PrecioUnitario: 24.10,
        SubTotal: 241.00,
        RD: 13206.80,
        PorcentajePesORD: 6,
        PesoRD: 19125.00,
        Transporte: 5357.82,
        TotalGastos: 24482.82,
        Total: 37689.62,
        CostoUnit: 3768.96,
        PrecioUnit: 6030.34,
        PrecioArticulo: 0
    },

    {
        Codigo: 4,
        PorcentajePeso: 19,
        Peso: 123,
        Cantidad: 65,
        descripcion: 'Pantalon Deportivo',
        PrecioUnitario: 14.50,
        SubTotal: 942.50,
        RD: 51649.00,
        PorcentajePesORD: 23,
        PesoRD: 27675.00,
        Transporte: 7753.08,
        TotalGastos: 35428.08,
        Total: 87077.08,
        CostoUnit: 1339.65,
        PrecioUnit: 2143.44,
        PrecioArticulo: 0
    },
    {
        Codigo: 5,
        PorcentajePeso: 8,
        Peso: 53,
        Cantidad: 5,
        descripcion: 'Chaqueta de borbaderos',
        PrecioUnitario: 20.50,
        SubTotal: 102.50,
        RD: 5617.00,
        PorcentajePesORD: 2,
        PesoRD: 11925.00,
        Transporte: 3340.76,
        TotalGastos: 15265.76,
        Total: 20882.76,
        CostoUnit: 4176.55,
        PrecioUnit: 6682.48,
        PrecioArticulo: 0
    },


    {
        Codigo: 6,
        PorcentajePeso: "12%",
        Peso: 73,
        Cantidad: 23,
        descripcion: "Jeans con bolsillo con solapa",
        PrecioUnitario: 26.99,
        SubTotal: 620.77,
        RD: 34018.20,
        PorcentajePesORD: "15%",
        PesoRD: 16425.00,
        Transporte: 4601.42,
        TotalGastos: 21026.42,
        Total: 55044.62,
        CostoUnit: 2393.24,
        PrecioUnit: 3829.19,
        PrecioArticulo: 0
    },
    {
        Codigo: 7,
        PorcentajePeso: "1%",
        Peso: 8,
        Cantidad: 12,
        descripcion: "Mocasines minimalistas",
        PrecioUnitario: 24.50,
        SubTotal: 294.00,
        RD: 16111.20,
        PorcentajePesORD: "7%",
        PesoRD: 1800.00,
        Transporte: 504.27,
        TotalGastos: 2304.27,
        Total: 18415.47,
        CostoUnit: 1534.62,
        PrecioUnit: 2455.40,
        PrecioArticulo: 0
    },
    {
        Codigo: 8,
        PorcentajePeso: "1%",
        Peso: 6,
        Cantidad: 5,
        descripcion: "1 pieza blazer y 1 pieza pant.",
        PrecioUnitario: 53.49,
        SubTotal: 267.45,
        RD: 14656.26,
        PorcentajePesORD: "6%",
        PesoRD: 1350.00,
        Transporte: 378.20,
        TotalGastos: 1728.20,
        Total: 16384.46,
        CostoUnit: 3276.89,
        PrecioUnit: 5243.03,
        PrecioArticulo: 0
    },

    {
        Codigo: 9,
        PorcentajePeso: "20%",
        Peso: 125,
        Cantidad: 20,
        descripcion: "Zapatilla deportivas arriba alta",
        PrecioUnitario: 27.10,
        SubTotal: 542.00,
        RD: 29701.60,
        PorcentajePesORD: "13%",
        PesoRD: 28125.00,
        Transporte: 7879.15,
        TotalGastos: 36004.15,
        Total: 65705.75,
        CostoUnit: 3285.29,
        PrecioUnit: 5256.46,
        PrecioArticulo: 0
    },
    {
        Codigo: 10,
        PorcentajePeso: "20%",
        Peso: 125,
        Cantidad: 20,
        descripcion: "Zapatilla deportivas arriba alta Est.",
        PrecioUnitario: 30.10,
        SubTotal: 602.00,
        RD: 32989.60,
        PorcentajePesORD: "14%",
        PesoRD: 28125.00,
        Transporte: 7879.15,
        TotalGastos: 36004.15,
        Total: 68993.75,
        CostoUnit: 3449.69,
        PrecioUnit: 5519.50,
        PrecioArticulo: 0
    },

]

let GastoADM = [
    {
        Codigo: 1,
        Descripcion: "Alquiler",
        Valor: 12500.00
    },
    {
        Codigo: 2,
        Descripcion: "Energía Eléctrica       ",
        Valor: 8500
    },
    {
        Codigo: 3,
        Descripcion: "Internet",
        Valor: 3500
    },
    {
        Codigo: 4,
        Descripcion: "Publicidad Digital",
        Valor: 2800
    },

]

let Empleados = [
    {
        Codigo: 1,
        Nombre: "Juan Pérez ",
        Puesto: "Vendedor",
        Salario: 9500,
    },
    {
        Codigo: 2,
        Nombre: "Maria Hernandez ",
        Puesto: "Cajera",
        Salario: 10000,
    },
    {
        Codigo: 3,
        Nombre: "Julisa Perez",
        Puesto: "Contador",
        Salario: 15000,
    },
    {
        Codigo: 4,
        Nombre: "Pedro Gonzalez",
        Puesto: "Administrador",
        Salario: 18500,
    },
    {
        Codigo: 5,
        Nombre: "Juana Reyes ",
        Puesto: "Limpieza",
        Salario: 6000,
    }
]

let GastosMenore = [
    {
        Codigo: 1,
        Descripcion: "Limpieza",
        Valor: 1800,
    },

    {
        Codigo: 2,
        Descripcion: "Dietas",
        Valor: 1200,
    },
    {
        Codigo: 3,
        Descripcion: "Publicidad",
        Valor: 5000,
    },

    {
        Codigo: 4,
        Descripcion: "Telefonia",
        Valor: 2500,
    },
    {
        Codigo: 5,
        Descripcion: "Motoconcho",
        Valor: 3000,
    }
]


const Compra = () => {


    const [nuevoDatos, setNuevoDatos] = useState([]);
    const [Beneficio, setBeneficio] = useState(0);
    const [state, setState] = useState(false);
    const [Reset, setReset] = useState(false);


    const AddBeneficio = (e) => {
        e.preventDefault();
        if (Beneficio > 0) {
            setNuevoDatos([...nuevoDatos, ...DatosCompra]);
            setState(true)
            localStorage.setItem("BeneficioActual", Beneficio)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let BenefPorce = Beneficio / 100

        const nuevosArticulosD = nuevoDatos.map((datosCompra) => {
            return {
                ...datosCompra,
                PorcentajeBeneficio: datosCompra.CostoUnit * (1 + BenefPorce)
            };
        });
        setNuevoDatos(nuevosArticulosD);
        setReset(true)
     
    }

    const ReseT = () => {
        setNuevoDatos([])
        setBeneficio(0)
        setState(false)
        setReset(false)
    }

    return (
        <div>
            <div className=" ">
                <Footer />
                <div className="w-[25rem]">
                    {state == false &&
                        <form onSubmit={AddBeneficio} >
                            <div className="flex flex-col sm:flex-row ml-2">
                                <label className="flex-1 pr-2 text-white">
                                    Beneficio:
                                    <input
                                        type="number"
                                        value={Beneficio}
                                        onChange={(e) => setBeneficio(e.target.value)}
                                        className="w-full text-black border rounded px-2 py-1"
                                    />
                                </label>
                            </div>
                            <div className='ml-[5rem]'>
                                <button
                                    onClick={AddBeneficio}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0">
                                    Add. Beneficio
                                </button>
                            </div>
                        </form>
                    }
                    {state == true && Reset == false &&
                        <div className=''>
                            <button
                                onClick={handleSubmit}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                                Calcular
                            </button>
                        </div>
                    }
                    <Footer/>
                    {Reset == true &&
                        <div className=''>
                            <button
                                onClick={ReseT}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                                Cambiar Beneficio
                            </button>
                        </div>
                    }




                </div>
                <h1 className='font-extrabold text-white text-[3rem] mb-4'>Compra</h1>
                <div className="container  ">
                    <div className="overflow-hidden rounded-sm shadow-md">
                        <div className=" overflow-x-auto">
                            <div className="">
                                <table className="  whitespace-nowrap">
                                    <thead>
                                        <tr className="font-bold  border">
                                            <th className="px-6 py-3 bg-blue-400 ">{`Código`}</th>
                                            <th className="px-6 py-3 bg-blue-400">{`%Part. Peso`}</th>
                                            <th className="px-6 py-3 bg-blue-400">{`Peso`}</th>
                                            <th className="px-6 py-3 bg-blue-400">{`Cantidad`}</th>
                                            <th className="px-6 py-3 bg-blue-400">{`Descripcion`}</th>
                                            <th className="px-6 py-3 bg-blue-400">{`Precio U.`}</th>
                                            <th className="px-6 py-3 bg-blue-400">{`Subtotal`}</th>
                                            <th className="px-6 py-3 bg-blue-400">{`RD$`}</th>
                                            <th className="px-6 py-3 bg-blue-400">{`%Part`}</th>
                                            <th className="px-6 py-3 bg-blue-400">{`Peso$`}</th>
                                            <th className="px-6 py-3 bg-blue-400">{`Transporte`}</th>
                                            <th className="px-6 py-3 bg-blue-400">{`Total Gastos`}</th>
                                            <th className="px-6 py-3 bg-blue-400">{`Total`}</th>
                                            <th className="px-6 py-3 bg-blue-400">{`Costo Unit`}</th>
                                            <th className="px-6 py-3 bg-blue-400">{`Precio Unit`}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">


                                        {nuevoDatos.map((item) => (
                                            <tr className="border-b  " key={item.Codigo}>
                                                <td className="px-6 py-4 border bg-blue-200">{item.Codigo}</td>
                                                <td className="px-6 py-4 border bg-blue-200">{item.PorcentajePeso}</td>
                                                <td className="px-6 py-4 border bg-blue-200">{item.Peso}</td>
                                                <td className="px-6 py-4 border bg-blue-200">{item.Cantidad}</td>
                                                <td className="px-6 py-4 border bg-blue-200">{item.descripcion}</td>
                                                <td className="px-6 py-4 border bg-blue-200">{item.PrecioUnitario}</td>
                                                <td className="px-6 py-4 border bg-blue-200">{item.SubTotal}</td>
                                                <td className="px-6 py-4 border bg-blue-200">{item.RD}</td>
                                                <td className="px-6 py-4 border bg-blue-200">{item.PorcentajePesORD}</td>
                                                <td className="px-6 py-4 border bg-blue-200">{item.PesoRD}</td>
                                                <td className="px-6 py-4 border bg-blue-200">{item.Transporte}</td>
                                                <td className="px-6 py-4 border bg-blue-200">{item.TotalGastos}</td>
                                                <td className="px-6 py-4 border bg-blue-200">{item.Total}</td>
                                                <td className="px-6 py-4 border bg-blue-200">{item.CostoUnit}</td>
                                                <td className="px-6 py-4 border bg-blue-200">{((Number(item.PorcentajeBeneficio)).toLocaleString())}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
            <div>

            </div>
            {Ventas()}
            {GastosADM()}
            {Empleado()}
            {GastosMenores()}
            {Consolidacion()}
        </div>
    )
}

function Ventas() {


    const [nuevoArray, setNuevoArray] = useState([]);



    const agregarAlNuevoArray = () => {


        setNuevoArray([...nuevoArray, ...DatosCompra]);
        // actualizarTotales()
    }

    // Actualiza la tabla con el total de cada artículo
    const actualizarTotales = () => {

        const nuevosArticulos = nuevoArray.map((articulo) => {
            let aleatorio = Math.floor(Math.random() * articulo.Cantidad) + 1
            return {
                ...articulo,
                CantidadAleatorio: aleatorio,
                Total: aleatorio * articulo.PrecioUnit,
                TotalCosto: aleatorio * articulo.CostoUnit
            };
        });
        setNuevoArray(nuevosArticulos);
    };


    // Calcula el total de la compra
    const totalCompra = () => {
        let total = 0;
        nuevoArray.forEach((articulo) => {
            total += articulo.Total
        });
        localStorage.setItem("TotaVentas", total)
        return total.toLocaleString();
    };

    const totalCosto = () => {
        let total = 0
        nuevoArray.forEach((articulo) => {
            total += articulo.TotalCosto
        })

        localStorage.setItem("TotalCosto", total)

        return total.toLocaleString()
    }



    return (
        <div className="w-[50rem] container mx-auto  flex space-x-4">
            <div className="w-1/2">
                <h1 className='font-extrabold text-white text-[3rem] '>Ventas Netas del Mes</h1>

                <button onClick={agregarAlNuevoArray} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0" >Vender</button>
                <button onClick={actualizarTotales} className="ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0" >Actualizar totales</button>
                <table className="table-auto border w-full">
                    <thead>
                        <tr className="bg-gray-200 text-black uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left bg-green-400">Linea</th>
                            <th className="py-3 px-6 text-left bg-green-400">Código</th>
                            <th className="py-3 px-6 text-left bg-green-400">Cantidad</th>
                            <th className="py-3 px-6 text-left bg-green-400">Descripción</th>
                            <th className="py-3 px-6 text-left bg-green-400">Precio</th>
                            <th className="py-3 px-6 text-left bg-green-400">Total por artículo</th>
                            <th className="py-3 px-6 text-left bg-green-400"></th>
                            <th className="py-3 px-6 text-left bg-yellow-400">Costo X Unidad</th>
                            <th className="py-3 px-6 text-left bg-yellow-400">Total de costo</th>
                        </tr>
                    </thead>

                    <tbody>

                        {nuevoArray.map((articulo) => (
                            <tr key={articulo.Codigo} className="border-b">
                                <td className="py-3 px-6 text-left bg-green-200">{articulo.Codigo}</td>
                                <td className="py-3 px-6 text-left bg-green-200">{articulo.Codigo}</td>
                                <td className="py-3 px-6 text-left bg-green-200">{articulo.CantidadAleatorio}</td>
                                <td className="py-3 px-6 text-left bg-green-200">{articulo.descripcion}</td>
                                <td className="py-3 px-6 text-left bg-green-200">{(Number(articulo.PrecioUnit)).toLocaleString()}</td>
                                <td className="py-3 px-6 text-left bg-green-200">{(Number(articulo.Total)).toLocaleString()}</td>
                                <td className="py-3 px-6 text-left bg-green-200"></td>
                                <td className="py-3 px-6 text-left bg-yellow-200">{articulo.CostoUnit}</td>
                                <td className="py-3 px-6 text-left bg-yellow-200">{(Number(articulo.TotalCosto)).toLocaleString()}</td>

                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td className="py-3 px-3 text-left bg-green-200"></td>

                            <td className="py-3 px-3 text-left bg-green-200"></td>
                            <td className="py-3 px-3 text-left bg-green-200">{ }</td>
                            <td className="py-3 px-3 text-left bg-green-200">{ }</td>
                            <td colSpan="3" className="py-6 px-12 text-right bg-green-200">
                                Total: {totalCompra()}
                            </td>
                            <td colSpan="4" className="py-3 px-6 text-right bg-yellow-200">Total:  {totalCosto()}</td>
                            {/* <td className=" py-3 px-6 text-left bg-yellow-200"></td> */}

                        </tr>
                    </tfoot>


                </table>


            </div>

        </div>
    );
}

function GastosADM() {

    const totalGastoADM = () => {
        let total = 0
        GastoADM.forEach((adm) => {
            total += adm.Valor
        })

        localStorage.setItem("TotalGastosADM", total)

        return total.toLocaleString()
    }

    return (
        <div className="w-[50rem] container mx-auto  flex space-x-4">
            <div className="w-1/2">
                <h1 className='font-extrabold text-white text-[3rem] '>Gastos Administrativo</h1>

                <table className="table-auto border w-full">
                    <thead>
                        <tr className="bg-gray-200 text-black uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left bg-green-400">Descripcion</th>
                            <th className="py-3 px-6 text-left bg-green-400">Valor</th>

                        </tr>
                    </thead>



                    <tbody>
                        {GastoADM.map((gastoA) => (
                            <tr key={gastoA.Codigo} className="border-b">
                                <td className="py-3 px-6 text-left bg-green-200">{gastoA.Descripcion}</td>
                                <td className="py-3 px-6 text-left bg-green-200">{(Number(gastoA.Valor)).toLocaleString()}</td>

                            </tr>
                        ))}

                    </tbody>

                    <tfoot>
                        <tr>
                            <td className="py-3 px-3 text-left bg-green-200"></td>
                            <td className="py-3 px-3 text-left bg-green-200">
                                {totalGastoADM()}
                            </td>
                        </tr>
                    </tfoot>


                </table>


            </div>

        </div>
    )
}


function Empleado() {

    const totalSalario = () => {
        let total = 0
        Empleados.forEach((empl) => {
            total += empl.Salario
        })

        localStorage.setItem("TotalSalario", total)

        return total.toLocaleString()
    }

    return (
        <div className="w-[50rem] container mx-auto  flex space-x-4">
            <div className="w-1/2">
                <h1 className='font-extrabold text-white text-[3rem] '>Empleados</h1>

                <table className="table-auto border w-full">
                    <thead>
                        <tr className="bg-gray-200 text-black uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left bg-green-400">Nombre</th>
                            <th className="py-3 px-6 text-left bg-green-400">Puesto</th>
                            <th className="py-3 px-6 text-left bg-green-400">Salario</th>

                        </tr>
                    </thead>



                    <tbody>
                        {Empleados.map((empl) => (
                            <tr key={empl.Codigo} className="border-b">
                                <td className="py-3 px-6 text-left bg-green-200">{empl.Nombre}</td>
                                <td className="py-3 px-6 text-left bg-green-200">{empl.Puesto}</td>
                                <td className="py-3 px-6 text-left bg-green-200">{(Number(empl.Salario)).toLocaleString()}</td>

                            </tr>
                        ))}

                    </tbody>

                    <tfoot>
                        <tr>
                            <td className="py-3 px-3 text-left bg-green-200"></td>
                            <td className="py-3 px-3 text-left bg-green-200"></td>
                            <td className="py-3 px-3 text-left bg-green-200">
                                {totalSalario()}
                            </td>
                        </tr>
                    </tfoot>


                </table>


            </div>

        </div>
    )
}

function GastosMenores() {

    const TotalGastosM = () => {
        let total = 0
        GastosMenore.forEach((GM) => {
            total += GM.Valor
        })

        localStorage.setItem("TotalGastosM", total)

        return total.toLocaleString()
    }

    return (
        <div className="w-[50rem] container mx-auto  flex space-x-4">
            <div className="w-1/2">
                <h1 className='font-extrabold text-white text-[3rem] '>Gastos Menores</h1>

                <table className="table-auto border w-full">
                    <thead>
                        <tr className="bg-gray-200 text-black uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left bg-green-400">Descripcion</th>
                            <th className="py-3 px-6 text-left bg-green-400">Valor</th>


                        </tr>
                    </thead>



                    <tbody>

                        {GastosMenore.map((GM) => (
                            <tr key={GM.Codigo} className="border-b">
                                <td className="py-3 px-6 text-left bg-green-200">{GM.Descripcion}</td>
                                <td className="py-3 px-6 text-left bg-green-200">{((GM.Valor)).toLocaleString()}</td>


                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td className="py-3 px-3 text-left bg-green-200"></td>
                            <td className="py-3 px-3 text-left bg-green-200">
                                {TotalGastosM()}
                            </td>
                        </tr>
                    </tfoot>


                </table>


            </div>

        </div>
    )
}


function Consolidacion() {

    const [TotalVentasV, setTotalVentasV] = useState(0);
    const [TotalCostoV, setTotalCostoV] = useState(0);
    const [TotalGastosMM, setTotalGastosMM] = useState(0);
    const [TotalSalarioE, setTotalSalario] = useState(0);
    const [TotalGastosADM, setTotalGastosADM] = useState(0);

    const [BeneficioActual, setBeneficioActual] = useState(0);

    useEffect(() => {

        //Ventas
        setTotalVentasV(localStorage.getItem("TotaVentas"))
        setTotalCostoV(localStorage.getItem("TotalCosto"))
        //Gastos
        setTotalGastosADM(localStorage.getItem("TotalGastosADM"))
        setTotalSalario(localStorage.getItem("TotalSalario"))
        setTotalGastosMM(localStorage.getItem("TotalGastosM"))
        setBeneficioActual(localStorage.getItem("BeneficioActual"))

    }, [
        localStorage.getItem("TotaVentas"),
        localStorage.getItem("TotalCosto"),
        localStorage.getItem("TotalGastosM"),
        localStorage.getItem("TotalSalario"),
        localStorage.getItem("TotalGastosADM"),
        localStorage.getItem("BeneficioActual")
    ]);

    function TOTALGastos() {

        let total = 0

        if (TotalGastosADM > 0 && TotalSalarioE > 0 && TotalGastosMM > 0) {
            total = Number(TotalGastosADM) + Number(TotalSalarioE) + Number(TotalGastosMM)

        }



        return total
    }

    function Beneficio() {
        let Beneficiobruto = 0
        if (TotalVentasV > 0 && TotalCostoV > 0) {
            Beneficiobruto = TotalVentasV - TotalCostoV

        }

        return Beneficiobruto

    }

    function BeneficioNeto() {

        let TotalNeto = 0

        TotalNeto = Beneficio() - TOTALGastos()

        return TotalNeto
    }

    function Porcentaje() {

        let Porcentajeb = 0
        Porcentajeb = ((Beneficio() / TOTALGastos()) - 1) * 100


        return Porcentajeb
    }



    function BeneficioRecomendado() {
        const porcentaje = Porcentaje();
        let recomendacion1 = "";
      
        if (porcentaje <= 0) {
          recomendacion1 = `El Beneficio debe ser mayor que ${BeneficioActual} Tiene una perdida de ${porcentaje}`;
        } else {
          recomendacion1 = `Su Beneficio de ${BeneficioActual} es Buena tiene un porcentaje de ${porcentaje}`;
        }
      
        return recomendacion1;
      }
      



    return (
        <div className="w-[50rem] container mx-auto  flex space-x-4">
            <div className="w-1/2">
                <h1 className='font-extrabold text-white text-[3rem] '>Consolidacion</h1>
                <table className="table-auto border w-full">
                    <thead>
                        <tr className="bg-gray-200 text-black uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left bg-green-400">Ventas</th>
                            <th className="py-3 px-6 text-left bg-green-400">Costo de Ventas</th>
                            <th className="py-3 px-6 text-left bg-green-400">Beneficio Bruto</th>



                        </tr>
                    </thead>




                    <tbody>

                        <tr className="border-b">
                            <td className="py-3 px-6 text-left bg-green-200">{TotalVentasV.toLocaleString()}</td>
                            <td className="py-3 px-6 text-left bg-green-200">{TotalCostoV.toLocaleString()}</td>
                            <td className="py-3 px-6 text-left bg-green-200">{Beneficio().toLocaleString()}</td>
                        </tr>

                    </tbody>

                    <tfoot>
                        <tr>
                            <td className="py-3 px-3 text-left bg-green-200"></td>
                            <td className="py-3 px-3 text-left bg-green-200"></td>
                            <td className="py-3 px-3 text-left bg-green-200">
                                { }
                            </td>
                        </tr>
                    </tfoot>


                </table>
                <Footer />
                <table className="table-auto border w-full">
                    <thead>
                        <tr className="bg-gray-200 text-black uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left bg-green-400">Gastos Administrativos</th>
                            <th className="py-3 px-6 text-left bg-green-400">Gastos Personales</th>

                            <th className="py-3 px-6 text-left bg-green-400">Gastos Menores</th>
                            <th className="py-3 px-6 text-left bg-green-400">Total de Gastos</th>




                        </tr>
                    </thead>

                    <tbody>

                        <tr className="border-b">
                            <td className="py-3 px-6 text-left bg-green-200">{(Number(TotalGastosADM)).toLocaleString()}</td>
                            <td className="py-3 px-6 text-left bg-green-200">{(Number(TotalSalarioE)).toLocaleString()}</td>
                            <td className="py-3 px-6 text-left bg-green-200">{(Number(TotalGastosMM)).toLocaleString()}</td>
                            <td className="py-3 px-6 text-left bg-green-200">{(TOTALGastos()).toFixed(2)}</td>
                        </tr>
                    </tbody>

                    <tfoot>

                        <tr>
                            <td className="py-3 px-3 text-left bg-green-200"></td>
                            <td className="py-3 px-3 text-left bg-green-200"></td>
                            <td className="py-3 px-6 text-left bg-green-200">{ }</td>
                            <td className="py-3 px-3 text-left bg-green-200">

                            </td>
                        </tr>


                    </tfoot>


                </table>
                <Footer />
                <table className="table-auto border w-full">
                    <thead>
                        <tr className="bg-gray-200 text-black uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left bg-green-400">Beneficios Neto</th>
                            <th className="py-3 px-6 text-left bg-green-400"></th>
                            <th className="py-3 px-6 text-left bg-green-400"></th>
                            <th className="py-3 px-6 text-left bg-green-400"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="py-3 px-6 text-left bg-green-200">{Beneficio().toLocaleString()}</td>
                            <td className="py-3 px-6 text-left bg-green-200">{"-"}</td>
                            <td className="py-3 px-6 text-left bg-green-200">{TOTALGastos().toLocaleString()}</td>
                            <td className="py-3 px-6 text-left bg-green-200">{BeneficioNeto().toLocaleString()}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="py-3 px-3 text-left bg-green-200"></td>
                            <td className="py-3 px-3 text-left bg-green-200"></td>
                            <td className="py-3 px-6 text-left bg-green-200">{ }</td>
                            <td className="py-3 px-3 text-left bg-green-200">
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <Footer />
                <table className="table-auto border w-full">
                    <thead>
                        <tr className="bg-gray-200 text-black uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left bg-green-400">Beneficio Bruto</th>
                            <th className="py-3 px-6 text-left bg-green-400"></th>
                            <th className="py-3 px-6 text-left bg-green-400">Total Gastos</th>
                            <th className="py-3 px-6 text-left bg-green-400">Porcentaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="py-3 px-6 text-left bg-green-200">{Beneficio().toLocaleString()}</td>
                            <td className="py-3 px-3 text-left bg-green-200">/</td>
                            <td className="py-3 px-6 text-left bg-green-200">{TOTALGastos().toLocaleString()}</td>
                            <th className={(Porcentaje().toFixed(0)) < 0 ? "text-red-600 py-3 px-6 text-left bg-green-200" : "text-black py-3 px-6 text-left bg-green-200"}>{(Porcentaje().toFixed(0))}%</th>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td className="py-3 px-3 text-left bg-green-200"></td>
                            <td className="py-3 px-3 text-left bg-green-200"></td>
                            <td className="py-3 px-3 text-left bg-green-200"></td>
                            <td className="py-3 px-3 text-left bg-green-200"></td>
                        </tr>
                    </tfoot>
                </table>
                <Footer/>
                <table className="table-auto border w-full">
                    <thead>
                        <tr className="bg-gray-200 text-black uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left bg-green-400">Beneficio Recomendado</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="py-3 px-6 text-left bg-green-200">{BeneficioRecomendado()}</td>
                          
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td className="py-3 px-3 text-left bg-green-200"></td>

                        </tr>
                    </tfoot>
                </table>

            </div>

        </div>
    )
}


export default Compra
