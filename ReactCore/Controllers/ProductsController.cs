using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactCore.BLL.Model;

namespace ReactCore.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetList()
        {
            var model = new List<ProductViewModel>
            {
                new ProductViewModel {
                     Id= 1,
                     Name= "Сало",
                     Image= "https://i.pinimg.com/originals/6e/e8/82/6ee882416c7f548255bd2cf08c09b67b.jpg"
                 },
                new ProductViewModel {
                     Id= 2,
                     Name= "Катлета",
                     Image= "https://e3.edimdoma.ru/data/recipes/0009/4310/94310-ed4_wide.jpg?1485985503"
                 }
            };
            return Ok(model);
        }
    }
}