const defaultData = [
      // 1) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "¿Qué tipo de oración es la vida del alma?", respuesta: "la oración privada" },
      // 2) Multiple choice
      { type: 4, instruction: "Opción Múltiple", pregunta: "¿Dónde nos guía el conocimiento del plan de la salvación?", opciones: [
          "A) A la iglesia del Señor",
          "B) A la patria celestial",
          "C) Al pie de la cruz",
          "D) Al nuevo Edén"
        ], respuesta: "C) Al pie de la cruz" },
      // 3) True/False
      { type: 2, instruction: "Falso o Verdadero", pregunta: "Hay personas que han conocido el amor perdonador de Cristo y no desean realmente ser hijos de Dios.", respuesta: "Falso" },
      // 4) Fill in the blank
      { type: 3, instruction: "Completa la frase", pregunta: "Si le contemplamos constantemente “somos _____ a su semejanza con más y más gloria en la misma _____, como por el Espíritu del Señor”.", respuesta: "transformados, imagen" },
      // 5) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "¿Cómo puede medirse la excesiva corrupción del pecado? ", respuesta: "Puede medirse tan sólo a la luz de la cruz." },
      // 6) Multiple choice
      { type: 4, instruction: "Opción Múltiple", pregunta: "¿Cuál de los siguientes personajes tuvo un arrepentimiento sincero?", opciones: 
        ["A) Esaú ", "B) Balaam", "C) Judas Iscariote", "D) David"], respuesta: "D) David" },
      // 7) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "¿A quién  representaba la mística escalera del sueño que presencio Jacob? ", respuesta: "Al Señor Jesús, el único medio de comunicación entre Dios y el hombre." },
      // 8) True/False
      { type: 2, instruction: "Falso o Verdadero", pregunta: "En la escritura,  se llama nuevo nacimiento al cambio de vida, por la cual somos hechos hijos de Dios.  ", respuesta: "Falso" },
      // 9) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "¿Qué dos errores deben guardarse de forma especial, los hijos de Dios que a penas han comenzado a confiar en su gracia?", respuesta: "1. Fijarnos en nuestras propias obras, 2. Sostener que la fe en Cristo exime a los hombres de guardar la ley de Dios." },
      // 10) Fill in the blank
      { type: 3, instruction: "Completa la frase", pregunta: "“Si se estudiara la palabra de Dios como se debe, los hombres tendrían una grandeza de _____, una nobleza de _____ y una firmeza de propósito que raramente puede verse en estos tiempos”", respuesta: "Espíritu, carácter" },
      // 11) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "¿Quien es como un manantial en un desierto, que se derrama para refrescarlo todo, y despertar en los que ya están por  perecer ansias de beber del agua de la vida?", respuesta: "El espíritu de Cristo en el corazón." },
      // 12) Multiple choice
      { type: 4, instruction: "Opción Múltiple", pregunta: "¿Cuál fue el pecado preciso que confeso el pueblo de Israel en los días de Samuel? ", opciones: 
        ["A) Desearon tener mucha carne para alimentarse", "B) Desearon tener dioses en forma de estatua", "C) Desearon tener un rey para ser gobernados como las naciones que los rodeaban", "D) Desearon sacrificar a sus hijos para complacer a nuevos dioses"], respuesta: "C) Desearon tener un rey para ser gobernados como las naciones que los rodeaban" },
      // 13) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "¿Cuáles son las  formas en   que Dios nos habla según el capitulo 11?", respuesta: "De 4, Por la naturaleza y por la revelación, por su providencia y por la influencia de su Espíritu." },
      // 14) True/False
      { type: 2, instruction: "Falso o Verdadero", pregunta: "Juan no poseía belleza de carácter y no solo ambicionaba honores sino que era impetuoso y se resentía bajo las injurias", respuesta: "Verdadero" },
      // 15) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "¿Qué sucederá en  nosotros sus discípulos,  si trabajamos como  Cristo quiere y ganamos almas para él?  ", respuesta: "Sentiréis la necesidad de una experiencia mas profunda con el y de un conocimiento mas amplio de las cosas divinas." },
      // 16) Fill in the blank
      { type: 3, instruction: "Completa la frase", pregunta: "“Orar es el acto de abrir nuestro corazón a Dios como a un _____. La  oracion no _____ a Dios a nosotros, antes bien nos eleva a él”", respuesta: "Amigo, baja" },
      // 17) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "¿Cómo estaba dotado originalmente el hombre?", respuesta: "Con facultades nobles y de un entendimiento bien equilibrado. Era perfecto y estaba en armonía con Dios. Sus pensamientos eran puros, sus designios santos" },
      // 18) Multiple choice
      { type: 4, instruction: "Opción Múltiple", pregunta: "¿Qué características tiene la felicidad que se procura por motivos egoístas?", opciones: 
        ["A) Transitoria, superficial y vana ", "B) Falsa, vana y soberbia", "C) Desequilibrada, caprichosa y transitoria", "D) Superficial, descuidada y falsa"], respuesta: "C) Desequilibrada, caprichosa y transitoria" },
      // 19) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "¿Para  qué el enemigo del bien cegó el entendimiento de los hombres? ", respuesta: "Para que éstos mirasen a Dios con temor, para que lo considerasen severo e implacable." },
      // 20) True/False
      { type: 2, instruction: "Falso o Verdadero", pregunta: "“Le dijo Natanael: ¿De dónde me conoces? Respondió Jesús y le dijo: Antes que Felipe te llamara, cuando estabas debajo de la palmera, te vi” ", respuesta: "Falso" },
      // 21) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "Menciona dos elementos que debemos tener cuando imploramos misericordia y bendición de Dios", respuesta: "Debemos tener un espíritu de amor y perdón en nuestro propio corazón. " },
      // 22) Fill in the blank
      { type: 3, instruction: "Completa la frase", pregunta: "“El tema de la redención es un tema que los angeles desean escudriñar; será la _____ y el _____ de los redimidos durante las interminables edades de la eternidad”", respuesta: "ciencia, canto" },
      // 23) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "¿Cómo sabemos si hemos llegado a conocer a Dios? ", respuesta: "Si obedecemos sus mandamientos." },
      // 24) Multiple choice
      { type: 4, instruction: "Opción Múltiple", pregunta: "¿De que carácter es la verdadera confesión que  reconoce pecados particulares?. ", opciones: 
        ["A)	Especifico", "B)	Sincera", "C)	Urgente", "D)	Pecaminoso"], respuesta: "A)	Especifico" },
      // 25) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "¿Cuál es el título del capítulo cinco? ", respuesta: "La consagración" },
      // 26) True/False
      { type: 2, instruction: "Falso o Verdadero", pregunta: "“Es sabio reunir todos los recuerdos desagradables de la vida pasada, sus iniquidades y desengaños… y llorarlos hasta quedar abrumados de desaliento”. ", respuesta: "Falso" },
      // 27) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "¿Para qué fueron escritos los milagros de Jesús según el evangelio de Juan?", respuesta: "“Estos han sido escritos para para que creáis que Jesús es el Cristo, El Hijo de Dios, y para que creyendo tengáis vida en su nombre”" },
      // 28) Multiple choice
      { type: 4, instruction: "Opción Múltiple", pregunta: "¿Nombre del capitulo del Camino a Cristo que menciona la parábola del hijo pródigo? ", opciones: 
        ["A) La fuente de regocijo y felicidad, cap. 13", "B) El gozo de la colaboración, cap. 9", "C) Maravillas obradas por la fe, cap. 6", "D) El secreto del crecimiento"], respuesta: "C) Maravillas obradas por la fe, cap. 6" },
      // 29) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "¿Qué halla una persona que confiesa su pecado y lo deja, de acuerdo a Proverbios 28:13?", respuesta: "Perdón." },
      // 30) Direct
      { type: 1, instruction: "Pregunta Directa", pregunta: "Según Hebreos 3:12 ¿Qué se nos pide que no haya en ninguno de vosotros que lo aparte del Dios vivo?", respuesta: "Un corazón malo e incrédulo" }
    ];