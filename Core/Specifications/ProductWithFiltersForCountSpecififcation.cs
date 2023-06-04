using Core.Entities;

namespace Core.Specifications
{
    public class ProductWithFiltersForCountSpecififcation : BaseSpecification<Product>
    {
        public ProductWithFiltersForCountSpecififcation(ProductSpecificationParams productParams)
            : base(x =>
                (!productParams.BrandId.HasValue || x.ProductBrandId == productParams.BrandId) &&
                (!productParams.TypeId.HasValue || x.ProductTypeId == productParams.TypeId)
            )
        {

        }
    }
}
