---
title: 体系结构
---

## 体系结构学习路线

> 计算机体系结构（Computer Architecture）是描述计算机各组成部分及其相互关系的一组规则和方法，是程序员所看到的计算机属性。计算机体系结构主要研究内容包括指令系统结构（Instruction Set Architecture，简称ISA）和计算机组织结构（Computer Organization）。  
> —— 《计算机体系结构基础》

### CSAPP学习

CSAPP是一本经典的计算机体系结构入门教材，它详细介绍了计算机系统的硬件、软件、编译、运行、存储、网络等各个层面的体系结构。因此，我们强烈建议大家先阅读CSAPP，了解计算机体系结构的基本概念和原理。

学习资料:

* 中文版: [深入理解计算机系统](https://zh.1lib.sk/book/3624006/0aa1ec/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F.html)
* 英文原版: [Computer Systems: A Programmer's Perspective](https://zh.1lib.sk/book/5283306/7cd55b/computer-systems-a-programmers-perspective.html)

CSAPP中几乎每一章都有对应的课后lab,建议大家完成[课后lab](https://csapp.cs.cmu.edu/3e/labs.html)，加深对知识的理解。

### 计算机组成原理

推荐阅读RISC V版的《计算机组成与设计:硬件/软件接口》，这本书介绍了计算机中的算术运算实现、CPU流水线、存储器层次结构、并行处理器等内容。

学习资料:

* 中文版: [计算机组成与设计：硬件/软件接口（原书第5版·RISC-V版）](https://zh.1lib.sk/book/17022047/e06bf8/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BB%84%E6%88%90%E4%B8%8E%E8%AE%BE%E8%AE%A1%E7%A1%AC%E4%BB%B6%E8%BD%AF%E4%BB%B6%E6%8E%A5%E5%8F%A3%E5%8E%9F%E4%B9%A6%E7%AC%AC5%E7%89%88riscv%E7%89%88.html)

* 英文原版: [Computer Organization and Design: The Hardware/Software Interface](https://zh.1lib.sk/book/27437455/248168/computer-organization-and-design-riscv-edition-the-hardware-software-interface-the-morgan-kaufman.html)

### 数字电路

《数字设计和计算机体系结构》是一本经典的数字电路入门教材，它详细介绍了数字电路的组成、运算原理、存储器结构、时序逻辑等内容，并提供了一个简单的CPU设计实例。

这里我没有找到RISCV版的中文资源，提供的为MIPS指令集的版本，因此建议仅学习前五章数电部分。

学习资料:

* 中文版: [数字设计和计算机体系结构（原书第2版）](https://zh.1lib.sk/book/5694287/0dc21d/%E6%95%B0%E5%AD%97%E8%AE%BE%E8%AE%A1%E5%92%8C%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84%E5%8E%9F%E4%B9%A6%E7%AC%AC2%E7%89%88.html)

* 英文原版: [Digital Design and Computer Architecture: RISC-V Edition](https://zh.1lib.sk/book/16851890/f131e7/digital-design-and-computer-architecture-riscv-edition.html)

* labs、HDL代码等资源: [https://pages.hmc.edu/harris/ddca/ddcarv.html](https://pages.hmc.edu/harris/ddca/ddcarv.html)

### Verilog HDL学习

如果只是想简单学习Verilog的基本使用，推荐阅读该教程:

* [数字电路教程](https://vlab.ustc.edu.cn/guide/index.html)

可以直接通过这两个online judge平台来练习：

* [Verilog OJ - 中国科学技术大学](https://verilogoj.ustc.edu.cn/oj/)

* [HDLBits Verilog Problem Sets](https://hdlbits.01xz.net/wiki/Problem_sets#Verilog_Language)

如果想更深入学习数电以及Verilog, 建议阅读:

* 中文版: [Verilog HDL高级数字设计（第二版）](https://zh.1lib.sk/book/26883671/2d92a2/verilog-hdl%E9%AB%98%E7%BA%A7%E6%95%B0%E5%AD%97%E8%AE%BE%E8%AE%A1%E7%AC%AC%E4%BA%8C%E7%89%88.html)

* 英文原版: [Advanced Digital Design With the Verilog HDL](https://zh.1lib.sk/book/1159823/dc32c6/advanced-digital-design-with-the-verilog-hdl.html)

### CPU设计实战

如果你想在大一下学期参与[龙芯杯](http://www.nscscc.com/)比赛，建议阅读:

* [CPU设计实战](https://zh.1lib.sk/book/19282290/01d520/cpu%E8%AE%BE%E8%AE%A1%E5%AE%9E%E6%88%98-cpu-design-and-practice.html)

注意，比赛报名一般从三四月开始，八月初初赛结束，因此建议提前开始进行RTL设计。

### 未完待续...
