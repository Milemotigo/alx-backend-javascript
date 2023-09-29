export default function guardrail(mathFunction) {
    const queue = [];
    try{
        const execute = mathFunction();
        queue.push(execute);
    } catch(error) {
        queue.push(error.toString());
    } finally {
        queue.push("Guardrail was processed");
    }
    return queue;
}