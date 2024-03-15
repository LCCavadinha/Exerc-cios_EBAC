
$(document).ready(function(){
    $("#form-tarefa").submit(function(e){
        e.preventDefault();     

        const nomeTarefa = $("#nome-tarefa").val();

        const li = $("<li></li>");

        const input = $("<input>", {type: "checkbox", id: nomeTarefa, value: nomeTarefa});

        const label = $("<label></label>", {for: nomeTarefa, text: nomeTarefa});

        li.append(input, label);

        $("#lista-tarefas").append(li);
        $("#nome-tarefa").val("");
    });
});
