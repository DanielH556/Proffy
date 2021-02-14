module.exports = async function(db, {proffyValue, classValue, classSchedule}) {
    // Inserir dados na tabela 'proffys'
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name, 
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `);
    const proffy_id = insertedProffy.lastID;

    // Mesma coisa só que na tabela 'classes'
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `);
    const class_id = insertedClass.lastID;

    // Mesma parada só que na última tabela que falta
    const insertedAllClassSchedules = classSchedule.map((value) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${value.weekday}",
                "${value.time_from}",
                "${value.time_to}"
            );
        `);
    });

    // Aqui é onde tudo vira caos e começa a rodar os run da class_schedules
    await Promise.all(insertedAllClassSchedules);
}