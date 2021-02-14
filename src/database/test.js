const Db = require('./db');
const createProffy = require('./createProffy') ;

Db.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: "Edward Elric", 
        avatar: "/public/avatars/ed.jpg", 
        whatsapp: "543157352656", 
        bio: "Especialista em transmutação de objetos.<br><br>Fui aprendiz de uma alquimista chamada Izumi e tenho um irmão chamado Alphonse. Trabalhei no exército, e já reproduzi diversos tipos de alquimia. (inclusive transmutação humana).",
    }

    classValue = {
        subject: "Química",
        cost: "20", 
    }

    classSchedule = [
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classSchedule});

    // Consultar os dados

    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");
    
    // Classes de um determinado professor juntos com os dados dele
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `);

    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "1300"
    `);
    
});