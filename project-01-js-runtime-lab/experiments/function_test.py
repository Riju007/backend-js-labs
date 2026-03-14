def print_inputs(*args, **kwargs):
    print(type(args).__name__)
    print(type(kwargs).__name__)
    for i in args:
        print(i)
    for key, value in kwargs.items():
        print(f"{key}: {value}")


if __name__ == "__main__":
    temp = print_inputs
    temp.my_var = 5
    temp(1, 2, 4, name="Avisek", age=31)
    print(temp.my_var)
