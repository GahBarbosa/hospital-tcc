<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Home</title>
</head>
<body>  
  <div class="container">
    <form method="POST" class="form-group">
    @csrf
      <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="nome">Nome</label>
      <input type="text" class="col-sm-10" name="nome" id="nome">
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="usuario">usuario</label>
      <input type="text" class="col-sm-10" name="usuario" id="usuario">
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="descricao">descricao</label>
      <input type="text" class="col-sm-10" name="descricao" id="descricao">
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="senha">senha</label>
      <input type="text" class="col-sm-10" name="senha" id="senha">
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="lat">lat</label>
      <input type="text" class="col-sm-10" name="lat" id="lat">
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="lon">lon</label>
      <input type="text" class="col-sm-10" name="lon" id="lon">
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="a_pos">a_pos</label>
      <input type="text" class="col-sm-10" name="a_pos" id="a_pos">
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="a_neg">a_neg</label>
      <input type="text" class="col-sm-10" name="a_neg" id="a_neg">
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="b_pos">b_pos</label>
      <input type="text" class="col-sm-10" name="b_pos" id="b_pos">
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="b_neg">b_neg</label>
      <input type="text" class="col-sm-10" name="b_neg" id="b_neg">
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="ab_pos">ab_pos</label>
      <input type="text" class="col-sm-10" name="ab_pos" id="ab_pos">
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="ab_neg">ab_neg</label>
      <input type="text" class="col-sm-10" name="ab_neg" id="ab_neg">
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="o_pos">o_pos</label>
      <input type="text" class="col-sm-10" name="o_pos" id="o_pos">
      </div>
      <div class="form-group row">
      <label class="col-sm-2 col-form-label" for="o_neg">o_neg</label>
      <input type="text" class="col-sm-10" name="o_neg" id="o_neg">
      </div>


      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</body>
</html>