const UsersService = require("../services/users.service");

class UsersController {
    usersService = new UsersService();

    //회원가입
    createUser = async ( req, res, next) => {
        const { id, password, confirmPw, nickName } = req.body;

        const response = await this.usersService.createUser(
            id,
            password,
            confirmPw,
            nickName
          );
      
          res
            .status(response.status)
            .json(response.message);
        };

    //로그인
    loginUser = async (req, res, next) => {
        const { id, password } = req.body;
    
        const response = await this.usersService.loginUser(id, password);
        res.cookie('Bearer',response.token,{maxAge: 180000})
    
        res
          .status(response.status)
          .json(response.message);
      };
};

module.exports = UsersController;
