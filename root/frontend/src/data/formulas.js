export const calorieFormula = {
    "Row": {
        "Running": (a) => a * 10 + " m",
        "Ski-Erg": (a) => a * 1 + " cal",
        "Assault Bike": (a) => a * 0.7 + " cal",
        "Bike-Erg": (a) => a * 1 + " cal",
    },
    "Ski-Erg": {
        "Running": (a) => Math.floor(a * 10) + " m",
        "Row": (a) => a * 1 + " cal",
        "Assault Bike": (a) => Math.floor(a * 0.7) + " cal",
        "Bike-Erg": (a) => a * 1 + " cal",
    },
    "Running": {
        "Ski-Erg": (a) => Math.floor((a / 10) * 1) + " cal",
        "Row": (a) => (a / 10) * 1 + " cal",
        "Bike-Erg": (a) => Math.floor((a / 10) * 1) + " cal",
        "Assault Bike": (a) => (a / 10) * 0.7 + " cal",
    },
    "Bike-Erg": {
        "Running": (a) => Math.floor(a * 10) + " m",
        "Row": (a) => a * 1 + " cal",
        "Assault Bike": (a) => Math.floor(a * 0.7) + " cal",
        "Bike-Erg": (a) => Math.floor((a / 10) * 1) + " cal",
    },

}

export const meterFormula = {
    "Row": {
        "Running": (a) => a * 0.8 + " m",
        "Ski-Erg": (a) => a * 1 + " m",
        "Assault Bike": (a) => Math.ceil(a * 0.06) + " cal",
        "Bike-Erg": (a) => a * 1.6 + " m"
    },
    "Ski-Erg": {
        "Running": (a) => Math.ceil(a * 0.8) + " m",
        "Row": (a) => a * 1 + " m",
        "Assault Bike": (a) => Math.ceil(a * 0.06) + " cal",
        "Bike-Erg": (a) => a * 1.6 + " m"
    },
    "Running": {
        "Ski-Erg": (a) => Math.ceil(a * 1.25) + " m",
        "Row": (a) => a * 1.25 + " m",
        "Assault Bike": (a) => Math.ceil(a * 0.07) + " cal",
        "Bike-Erg": (a) => a * 2 + " m"
    },
    "Bike-Erg": {
        "Ski-Erg": (a) => Math.floor(a * 0.625) + " m",
        "Row": (a) => Math.floor(a * 0.625) + " m",
        "Assault Bike": (a) => Math.floor((a / 100) * 3.5) + " cal",
        "Running": (a) => Math.ceil(a / 2) + " m"

    },
    "Assault Bike": {
        "Running": (a) => Math.floor(a * 15) + " m",
        "Ski-Erg": (a) => Math.floor(a * 17) + " m",
        "Row": (a) => Math.floor(a * 17) + " m",
        "Bike-Erg": (a) => Math.ceil(a * 27) + " m",
    },
}


export const selectData = ["Row", "Assault Bike", "Ski-Erg", "Running", "Bike-Erg"]
