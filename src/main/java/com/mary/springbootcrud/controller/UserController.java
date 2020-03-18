package com.mary.springbootcrud.controller;

import com.mary.springbootcrud.model.User;
import com.mary.springbootcrud.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/")
    public String index(Model model) {
        List<User> userList = userRepository.findAllByOrderById();
        User user = new User();
        model.addAttribute("userList", userList);
        model.addAttribute("user", user);
        return "index";
    }

    @PostMapping("/save")
    public String save(@ModelAttribute User user) {
        User newUser = new User(user.getName(), user.getPhone(), user.getEmail());
        userRepository.save(newUser);
        return "redirect:/";
    }

    @PostMapping("/update")
    public String update(@ModelAttribute User user) {
        userRepository.save(user);
        return "redirect:/";
    }

    @PostMapping("/delete")
    public String delete(@RequestParam Integer id) {
        userRepository.deleteById(id);
        return "redirect:/";
    }

}
