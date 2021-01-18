# nesj js class transform object id issue

https://github.com/typestack/class-transformer/issues/138


      const order = plainToClass(class, obj, {
        excludeExtraneousValues: true,
        enableImplicitConversion: true <-- transforms obj id correctly
      });