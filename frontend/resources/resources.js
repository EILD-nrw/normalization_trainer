export const confi={
    "css.1.1":"./resources/styles.css",
    "feedback":true,
    "show_solution":true,
    "retry":true
}

/**
 * default phrases data
 * @type {Object[]}
 */
export const phrases = [
    {
        "text":"Wenden Sie die erste Normalform an.",
        "hint":"Eine Relation befindet sich in der ersten Normalform wenn alle Attribute"
    },
    {
        "text":"Makieren Sie alle Redundanzen die sich in der Relation befinden",
        "hint":"Redundanzen sind Werte die doppelt in der Relation vorkommen."
    },
    {
        "text":"Welche Werte sind Funktional abhänig",
        "hint":"Welche nicht Schlüssel Attribute besitzen eine FUnktionale abhänigkeit zu einen PK"
    },
    {
        "text":"Existieren Werte die nicht direkt von einem PK abhänig sind? Makieren Sie diese.",
        "hint":"Welche Werte besitzen eine transitive Abhänigkeit zu einander."
    },
    {
        "text":"Bringen Sie die 3NF in die BCNF",
        "hint":"Schauen Sie sich die Relationen mit einem zusammen gesätzen Primärschlüssel an."
    },
    {
        "text":"Die Relation ist jetzt in der BCNF",
        "hint":""
    }
]