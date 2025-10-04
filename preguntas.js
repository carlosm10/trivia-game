const defaultData = [
      // 1) Direct (example from your data)
      { type: 1, instruction: "Pregunta Directa", pregunta: "¿Qué tipo de oración es la vida del alma?", respuesta: "la oración privada" },

      // 2) Multiple choice (example from your data)
      { type: 4, instruction: "Opción Múltiple", pregunta: "¿Dónde nos guía el conocimiento del plan de la salvación?", opciones: [
          "A) A la iglesia del Señor",
          "B) A la patria celestial",
          "C) Al pie de la cruz",
          "D) Al nuevo Edén"
        ], respuesta: "C) Al pie de la cruz" },

      // 3) True/False (example from your data)
      { type: 2, instruction: "Falso o Verdadero", pregunta: "Hay personas que han conocido el amor perdonador de Cristo y no desean realmente ser hijos de Dios.", respuesta: "Falso" },

      // 4) Fill in the blank (example from your data)
      { type: 3, instruction: "Completa la frase", pregunta: "Si le contemplamos constantemente “somos _____ a su semejanza con más y más gloria en la misma _____, como por el Espíritu del Señor”. 2 Corintios 3:18", respuesta: "transformados, imagen" },

      // --- Placeholders (mixed order) ---
      // 5) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "", respuesta: "" },
      // 6) Multiple choice
      { type: 4, instruction: "Opción Múltiple", pregunta: "", opciones: ["", "", "", ""], respuesta: "" },
      // 7) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "", respuesta: "" },
      // 8) True/False
      { type: 2, instruction: "Falso o Verdadero", pregunta: "", respuesta: "" },
      // 9) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "", respuesta: "" },
      // 10) Fill in the blank
      { type: 3, instruction: "Completa la frase", pregunta: "", respuesta: "" },
      // 11) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "", respuesta: "" },
      // 12) Multiple choice
      { type: 4, instruction: "Opción Múltiple", pregunta: "", opciones: ["", "", "", ""], respuesta: "" },
      // 13) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "", respuesta: "" },
      // 14) True/False
      { type: 2, instruction: "Falso o Verdadero", pregunta: "", respuesta: "" },
      // 15) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "", respuesta: "" },
      // 16) Fill in the blank
      { type: 3, instruction: "Completa la frase", pregunta: "", respuesta: "" },
      // 17) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "", respuesta: "" },
      // 18) Multiple choice
      { type: 4, instruction: "Opción Múltiple", pregunta: "", opciones: ["", "", "", ""], respuesta: "" },
      // 19) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "", respuesta: "" },
      // 20) True/False
      { type: 2, instruction: "Falso o Verdadero", pregunta: "", respuesta: "" },
      // 21) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "", respuesta: "" },
      // 22) Fill in the blank
      { type: 3, instruction: "Completa la frase", pregunta: "", respuesta: "" },
      // 23) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "", respuesta: "" },
      // 24) Multiple choice
      { type: 4, instruction: "Opción Múltiple", pregunta: "", opciones: ["", "", "", ""], respuesta: "" },
      // 25) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "", respuesta: "" },
      // 26) True/False
      { type: 2, instruction: "Falso o Verdadero", pregunta: "", respuesta: "" },
      // 27) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "", respuesta: "" },
      // 28) Multiple choice
      { type: 4, instruction: "Opción Múltiple", pregunta: "", opciones: ["", "", "", ""], respuesta: "" },
      // 29) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "", respuesta: "" },
      // 30) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "", respuesta: "" }
    ];