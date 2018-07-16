	
		angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, uppercaseFilter, $http){
			$scope.app = "Lista Telefônica";
			$scope.contatos = [
			//{nome: uppercaseFilter("Jefferson"), telefone: "40028922", operadora:{"nome":"Vivo","codigo":21}, cor:"blue"},
			{nome: "Jefferson", telefone: "40028922", operadora:{"nome":"Vivo","codigo":21}, cor:"blue"},
			{nome: "Ian", telefone: "99653011", operadora:{"nome":"Vivo","codigo":21}, cor:"red"},
			{nome: "Teste", telefone: "99996666", operadora:{"nome":"Vivo","codigo":21}, cor:"green"}
			];
			/*
			var carregarContatos =  function(){
				$http.get("http://localhost:8080/contatos").sucess(function(data){
				$scope.contatos = data;
				});
			}
			
			*/
			$scope.operadoras = [
			{nome: "Oi", codigo: 31, preco:4},
			{nome: "Vivo", codigo: 21, preco:3},
			{nome: "Tim", codigo: 41, preco:2}
			];
			/*
			var carregarOperadoras =  function(){
				$http.get("http://localhost:8080/operadoras").sucess(function(data){
				$scope.contatos = data;
				});
			}
			
			*/
			$scope.cores = [
			{nome: "Azul", codigo:"blue"},
			{nome: "Vermelho", codigo:"red"},
			{nome: "Verde", codigo:"green"},
			{nome: "Amarelo", codigo:"yellow"},
			]
			
			/*
			var carregarCores =  function(){
				$http.get("http://localhost:8080/cores").sucess(function(data){
				$scope.contatos = data;
				});
			}
			
			*/
			$scope.adicionarContato = function (contato){
				$scope.contatos.push(angular.copy(contato));
				delete $scope.contato;
				$scope.contatoForm.$setPristine();

			};
			
			$scope.class = "selecionado";
			
			$scope.apagarContato = function(contatos){
				 $scope.contatos = contatos.filter(function(contato){
					if (!contato.selecionado) return contato;
				});
			};
			
			$scope.isContatosSelecionado = function(contatos){
				return contatos.some(function (contato){
					return contato.selecionado;
				
				});
			};
			$scope.ordenarPor = function(campo){
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;

			}
		});