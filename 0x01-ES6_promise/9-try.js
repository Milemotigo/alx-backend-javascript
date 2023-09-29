export default function guardrail(mathFunction) {
    let queue = [];
    try{
        let execute = mathFunction();
        queue.push(execute);
    } catch(error) {
        queue.push(error.toString());
    } finally {
        queue.push("Guardrail was processed");
    }
    return queue;
}